var inquirer = require("inquirer");
var mysql = require("mysql");

inquirer.prompt([
    {
        type: "list",
        name: "product",
        message: "What would you like to buy?",
        choices: ["test 1", "test 2"]
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
        console.log(answers.product);
        console.log(answers.quantity)
    }
);