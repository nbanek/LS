/*
input: momnth interest rate, loan duration, loan amount
output: monthly payment
method: user input and functions

START

GET loan amount, monthly interest rate, and loan duration from user
  CONVERT values to Number
SET loan amount to loamAmount
  REMOVE any commas if present
SET interest rate to monthlyInterestRate
  CONVERT to decimal
SET loan duration to loanDuration
  CONVERT to months

SET monthly payment to monthlyPayment
CALCULATE monthlypayment

PRINT monthlypayment

*/
const rlSync = require('readline-sync');

function prompt(string) {
  console.log(string);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('***Loan Payment Calculator***\n');

prompt('Please enter the loan amount in dollars');
let loanAmount = rlSync.question();
while (invalidNumber(loanAmount)) {
  prompt('Not a valid number, try again.');
  loanAmount = rlSync.question();
}

prompt('Please enter the annual percentage rate. e.g. (1, 5, 10%, etc.)');
let annualPercentageRate = String(parseFloat(rlSync.question()));
while (invalidNumber(annualPercentageRate)) {
  prompt('Not a valid number, try again.');
  annualPercentageRate = rlSync.question();
}
let monthlyPercentageRate = (annualPercentageRate / 12) / 100;

prompt('Please enter the loan duration in years');
let loanDurationYears = rlSync.question();
while (invalidNumber(loanDurationYears)) {
  prompt('Not a valid number, try again.');
  loanDurationYears = rlSync.question();
}
let loanDurationMonths = loanDurationYears * 12;

let monthlyPayment = loanAmount * (monthlyPercentageRate
  / (1 - Math.pow((1 + monthlyPercentageRate), (-loanDurationMonths))));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
