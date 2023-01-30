/* Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!*/

let currentBalance = 10000;

function withdraw (money) {
    if (money > currentBalance) {
        alert("The requested amount is larger than your current balance. Please try again with smaller amount");
        return;
    }
    currentBalance -= money;
    console.log(`Your current balance after the transaction is ${currentBalance}`);
}

// let withdrawMoney = withdraw();


//Bonus

let newWithdraw = prompt("Please enter the amount you would like to withdraw from your account: ");
let parsedNewWithdraw = Number.parseInt(newWithdraw);

if (!isNaN(parsedNewWithdraw)) {
    withdraw(newWithdraw);
    console.log(currentBalance);
} else {
    console.log("Please enter a valid input");
}
