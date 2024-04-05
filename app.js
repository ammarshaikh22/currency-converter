#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    PKR: 1, // base currency
    USD: 0.003597,
    EUR: 0.003320,
    IND: 0.299621,
    BTP: 0.002847
};
const askToUser = await inquirer.prompt([
    { message: "Enter currency from", name: "from", type: "list", choices: ["PKR", "USD", "EUR", "IND", "BTP"] },
    { message: "Enter currency to", name: "to", type: "list", choices: ["PKR", "USD", "EUR", "IND", "BTP"] },
    { message: "Enter your amount", name: "amount", type: "number" }
]);
let fromUser = askToUser.from;
let toUser = askToUser.to;
let userCurrencyFrom = currency[fromUser];
let userCurrencyTo = currency[toUser];
let userAmount = askToUser.amount;
let convertInBase = userAmount / userCurrencyFrom;
let nowConvertTo = Math.round(convertInBase * userCurrencyTo).toFixed(2);
console.log(`The amount from ${fromUser} to ${toUser} is ${nowConvertTo}`);
