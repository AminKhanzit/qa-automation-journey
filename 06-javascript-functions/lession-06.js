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

