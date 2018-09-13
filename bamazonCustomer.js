var inquirer = require("inquirer");
var mysql = require("mysql");
var con = mysql.createConnection({
    database: "bamazon",
    host: "localhost",
    user: "root",
    password: "root"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");


//buyProduct();

//function buyProduct() {
    inquirer.prompt([
        {
            type: "list",
            name: "product",
            message: `What would you like to buy? \n 0 external battery $48 \n 1 external harddrive $90 \n 2 monitor $180 \n 3 settlers of catan $53 \n 4 consentacle $30 \n 5 dead of winter $90 \n 6 agricola $67 \n 7 red rising $17 \n 8 thinking fast and slow $15 \n 9 name of the wind $11`,
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },  
        {
            message: "How many would you like to purchase?",
            type: "input",  
            name: "quantity",
            default: "number"
        }
    ])
    .then(
        function(answers) {
            var quantity = parseInt(answers.quantity);
            console.log(typeof(quantity));

            if (isNaN(quantity)) {
                console.log("That is not a number");
            }

            var product = (answers.product-1);

            con.query("Select * from PRODUCTS", function(err, result, fields) {
                if (err) throw err;
                if (quantity > result[product].stock_quantity) {
                    console.log("Insufficient quantity!")
                }
                else {
                    var totalCost = (result[product].price * quantity);
                    console.log(`You have purchased ${quantity} of ${result[product].product_name} for a total of ${totalCost}.`)
                    con.query("UPDATE PRODUCTS SET stock_quantity = "+ (result[product].stock_quantity - quantity )+" WHERE item_id = "+product)
                }
            });
        }
    );
});