import inquirer from "inquirer";
//Intialize user balance and pin code
let myBalance = 6000;
let myPin = 36482;
// Print welcome message
console.log("Welcome to code with Esha - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login sucessfully!");
    //console.log(`current account balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["Withdraw Amount", "Check balance"],
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Witthdraw sucessfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your Account balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect, Try again!");
}
