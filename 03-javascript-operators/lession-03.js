// Lesson 03: JavaScript Operators
let customerBalance = 500;
let rechargeAmount = 200;
let minimumBalance = 50;
let customerIsActive = true;

let outstandingLoan=false;

// Arithmetic Operator

let currentBalance = customerBalance + rechargeAmount;

//comparison operator
let hasSufficientBalance = currentBalance >= minimumBalance;

// Logical Operator
let canPackPurchase = hasSufficientBalance && customerIsActive && outstandingLoan ===false;



console.log("Current Balance:", currentBalance);
console.log("Has Sufficient Balance:", hasSufficientBalance);
console.log("Can Pack Purchase:", canPackPurchase);

//  QA Practice: Data Pack Purchase Eligibility

let accounntBalance = 300;
let dataPackPrice = 250;

console.log("Customer Eligible:", accounntBalance >= dataPackPrice);
console.log("Purchae Amount:", dataPackPrice);
console.log("Remaining Balance:", accounntBalance-dataPackPrice);