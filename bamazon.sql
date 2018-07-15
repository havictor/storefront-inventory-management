create database bamazon;
use bamazon;

create table products (
    item_id integer primary key auto_increment,
    product_name varchar(50) not null,
    department_name varchar(10),
    price float not null, --Sales cost 
    stock_quantity integer(2)
);

insert into products (product_name, department_name, price, stock_quantity) values 
    ("external battery", "electronics", 48, 10), 
    ("external harddrive", "electronics", 90, 10),
    ("monitor", "electronics", 180, 8),
    ("settlers of catan", "board games", 53, 5),
    ("consentacle", "board games", 30, 3),
    ("dead of winter", "board games", 90, 4),
    ("agricola", "board games", 67, 6),
    ("red rising", "books", 17, 2),
    ("thinking fast and slow", "books", 15, 3),
    ("name of the wind", "books", 11, 4); 