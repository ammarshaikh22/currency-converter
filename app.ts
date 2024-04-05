#! /usr/bin/env node
import inquirer from "inquirer";

//make the object of based currency
let currency: any = {
    PKR: 1,// base currency
    USD: 0.003597,
    EUR: 0.003320,
    IND: 0.299621,
    BTP: 0.002847
}

//ask the ques to user
const askToUser = await inquirer.prompt([
    { message: "Enter currency from", name: "from", type: "list", choices: ["PKR", "USD", "EUR", "IND", "BTP"] },
    { message: "Enter currency to", name: "to", type: "list", choices: ["PKR", "USD", "EUR", "IND", "BTP"] },
    { message: "Enter your amount", name: "amount", type: "number" }
])


let fromUser = askToUser.from //get currency from user converted from
let toUser = askToUser.to //get currency from user converted to
let userCurrencyFrom = currency[fromUser] //according to user from currency get base value dynamic pattern 
let userCurrencyTo = currency[toUser] //according to user to currency get base value dynamic pattern 
let userAmount = askToUser.amount //get amount from user 

let convertInBase = userAmount / userCurrencyFrom // divide the amount of user in our base currency

let nowConvertTo = Math.round(convertInBase * userCurrencyTo).toFixed(2) /*then multiply the the total of base 
currency to user currency and fixed the value of number to 2 then round of the number*/

console.log(`The amount from ${fromUser} to ${toUser} is ${nowConvertTo}`) //in last show the value in console