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
            message: `What would you like to buy? \n 1 external battery \n 2 external harddrive \n 3 monitor \n 4 settlers of catan \n 5 consentacle \n 6 dead of winter \n 7 agricola \n 8 red rising \n 9 thinking fast and slow \n 10 name of the wind`,
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
            var product = answers.product;
            con.query("Select * from PRODUCTS", function(err, result, fields) {
                if (err) throw err;
                var results = result;
                console.log(results);
            });

            if (typeof quantity !== "number") {
                console.log("That is not a number");
            }
            else {
                con.query("UPDATE PRODUCTS SET stock_quantity = " 
                +quantity+" WHERE item_id = "+product) //need to add logic here to subtract if
                console.log(answers.product);
                console.log(answers.quantity)
            }
        }
    );
    //end();
//};
//connection.end();
});