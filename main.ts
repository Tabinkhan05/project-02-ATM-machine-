import inquirer from 'inquirer';

let my_balance = 10000;
let my_pin = 1234;

console.log("Welcome to the ATM machine");

const atm = async () => {
    let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin:",
    }]);

    if (pinAnswer.pin === my_pin) {
        console.log("Pin is correct, login successful.");

        let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw amount", "Check balance"]
        }]);

        if (operationAns.operation === "Withdraw amount") {
            let amountAns = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }]);

            if (amountAns.amount <= 0) {
                console.log("Invalid amount. Please enter a positive number.");
            } else if (amountAns.amount > my_balance) {
                console.log("Insufficient balance.");
            } else {
                my_balance -= amountAns.amount;
                console.log(`${amountAns.amount} withdrawn successfully.`);
                console.log(`Your remaining balance is: ${my_balance}`);
            }
        } else if (operationAns.operation === "Check balance") {
            console.log(`Your account balance: ${my_balance}`);
        }
    } else {
        console.log("Pin is incorrect, try again!");
    }
};

atm().catch(error => console.error(error));











