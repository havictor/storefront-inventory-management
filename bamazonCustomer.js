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
            message: `What would you like to buy? \n 1 external battery $48 \n 2 external harddrive $90 \n 3 monitor $180 \n 4 settlers of catan $53 \n 5 consentacle $30 \n 6 dead of winter $90 \n 7 agricola $67 \n 8 red rising $17 \n 9 thinking fast and slow $15 \n 10 name of the wind $11`,
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

            if (typeof quantity !== "number") {
                console.log("That is not a number");
            }

            var product = answers.product;
            con.query("Select * from PRODUCTS", function(err, result, fields) {
                if (err) throw err;
                if (quantity > result[product].stock_quantity) {
                    console.log("Insufficient quantity!")
                }
            });




            //     con.query("UPDATE PRODUCTS SET stock_quantity = " 
            //     +quantity+" WHERE item_id = "+product) //need to add logic here to subtract if
            //     console.log(answers.product);
            //     console.log(answers.quantity)

        }
    );
    //end();
//};
//connection.end();
});