//practice 01 Create a function

function executeTestCases(){
    console.log("Test Case Executed");
}

// function call
executeTestCases();

//Practice 02 function with parameters
function executeTestCases1(testCaseName){
    console.log("Executing Test Case:", testCaseName);
}

// function call with parameter
executeTestCases1("Recharge Test");
executeTestCases1("Purchase Test");
executeTestCases1("Gifting Test");

//Practice 03 QA Validation

function validateTestCase(packPrice){
    if (packPrice <200){
        console.log("Pack Price:", packPrice, "- Test Passed");
    } else {
        console.log("Pack Price:", packPrice, "- Test Failed");
    }
}

// function call with parameter
validateTestCase(150);
validateTestCase(250);

//Task 01 – Calculate Remaining Balance

function calculateRemainingBalance(customerBalance, packPrice){
    console.log("Customer Balance:", customerBalance);
    console.log("Pack Price:", packPrice);
    return customerBalance - packPrice; 
   

}
let remainingBalance = calculateRemainingBalance(150, 99);

console.log("Remaining Balance:", remainingBalance);

function validateDataPack(customerBalance, packPrice){

    let status = "Passed";
    if(customerBalance < packPrice){
        status = "Failed";
    }
    return status;
    
}

console.log("Purchased Status:", validateDataPack(150, 99));
console.log("Purchased Status:", validateDataPack(50, 99));
console.log("Purchased Status:", validateDataPack(99, 99));


//Assignment Basic API Response validation

let apiResponse = {
    status: "SUCCESS",
    amount: 100,
    transactionId: "TXN123456789"
};

function validateTransaction(apiResponse){
    let status = "Invalid Transaction";
    if(apiResponse.status === "SUCCESS" && apiResponse.amount === 100 && apiResponse.transactionId !== null && apiResponse.transactionId.trim() !== ""){
       status = "Valid Transaction";
    } 
    return status;

}
console.log("Transaction Status:", validateTransaction(apiResponse));

//Assignment Data pack purchase validation

function validateDataPack(customerBalance, packPrice =99){
    if(packPrice === 0){
        return "Free Pack";
    }
    if(packPrice < 0){
        return "Invalid Pack Price";
    }
    let status = "Insufficient Balance";
    if(customerBalance >= packPrice){
        status = "Purchase Successful";
    }
    return status;
}

console.log("Data Pack Status:", validateDataPack(150));
console.log("Data Pack Status:", validateDataPack(150, -50));
console.log("Data Pack Status:", validateDataPack(50,100));


//Function Expression

const validateDataPack1 = function(customerBalance, packPrice){
    if(customerBalance >= packPrice){
        return "Purchase Successful";
    }
    return "Insufficient Balance";
};

console.log( validateDataPack1(150, 99));
console.log(validateDataPack1(50, 99));
console.log(validateDataPack1(200, 149));

//Function Expression with default parameter

const validateDataPack2 = function(customerBalance, packPrice=200){
    if(customerBalance >= packPrice){
        return "Purchase Successful";
    }
    return "Insufficient Balance";
};

console.log( validateDataPack2(150, 99));
console.log(validateDataPack2(50, 99));
console.log(validateDataPack2(200, 149));
console.log(validateDataPack2(150));


//Arrow Function

let apiResponse3 = {
    status: "SUCCESS",
    amount: 100,
    // transactionId: "TXN123456"
};

const validateTransaction3 = (apiResponse3)=>{

    let status = "Transaction Failed";

    if(apiResponse3.status === "SUCCESS" && apiResponse3.amount === 100 && 
        typeof apiResponse3.transactionId === "string" && apiResponse3.transactionId.trim() !== ""){
            status = "Transaction Successful";
        }
        return status;


}

console.log(validateTransaction3(apiResponse3));

console.log(validateTransaction3({
    status: "FAILED",
    amount: 100,
    transactionId: "TXN123456"
}));

console.log(validateTransaction3({
    status: "SUCCESS",
    amount: 100,
    transactionId: ""
}));


//Callback Function

const callbackFunction = (callback)=>{
    console.log("Callback Function Executed");
    callback();
}

const callbackChildFunction = ()=>{
    console.log("Callback function Verified");
}

callbackFunction(callbackChildFunction);

//Callback multiple function

const runTest = (testCase) => {
    console.log("Test Started");

    testCase();

    console.log("Test Finished");
};

const testRecharge = () => {
    console.log("Recharge Test: PASS");
};

const testDataPack = () => {
    console.log("Data Pack Test: PASS");
};

runTest(testRecharge);
runTest(testDataPack);


//Task: App Payment Test Execution

const executePaymentTest=(callback, amount)=>{
    console.log("Payment Test Started");
    callback(amount);
    console.log("Payment Test Finished");
}
const testBkashPayment =(amount)=>{

    if (amount >= 500) {
    console.log("Bkash Payment Complete: ", amount);
    }
    else{
        console.log("Bkash Payment Failed", amount);
    }

   
   
}
const testCardPayment =(amount)=>{

    if(amount >= 1000){
         console.log("Card Payment Completed", amount);
    }
    else {
        console.log("Card Payment failed", amount);
    }

   
}

executePaymentTest(testBkashPayment, 500);
executePaymentTest(testCardPayment, 1000);