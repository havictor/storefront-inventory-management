create database bamazon;
use bamazon;

create table products (
    item_id integer primary key auto_increment,
    product_name varchar(50), not null
    department_name varchar(10),
    price float not null, --Sales cost 
    stock_quantity integer(2)
);

insert into products (product_name, department_name, price, stock_quantity) values (); --inputsome dummy data later