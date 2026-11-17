// Lesson 04: Conditional Statements
let customerBalance = 150;
let packPrice = 99;
let isCustomerActive = false;
let hasOutstandingLoan = false;

if(isCustomerActive === true){
    if(customerBalance >=packPrice){
        if(hasOutstandingLoan === false){
            console.log("Purchase request is successful.");
            console.log("Purchase Amount:", packPrice);
            console.log("Remaining Balance:", customerBalance - packPrice);
        } else {
            console.log("Purchase request failed. Customer has an outstanding loan.");
        }
    } else {
        console.log("Purchase request failed. Insufficient balance.");
    }
}
    else {
        console.log("Purchase request failed. Customer is not active.");
    
    }
    

    //Switch Statement

    let apiResponse = {
        "status": "SUCCESS",
        "message": "Request successful.",
        "amount": 100,
        "transactionId": "txn123456"

    }

    switch(apiResponse.status){
        case "SUCCESS":
            console.log("Transaction Successful.");
            break;
            case "PENDING":
                console.log("Transaction is pending.");
                break;
                case "FAILED":
                    console.log("Transaction failed.");
                    break;
                    default:
                        console.log("Unknown transaction status.");
    }

    if(apiResponse.status === "SUCCESS" && apiResponse.amount === 100 && apiResponse.transactionId !== "" 
        && apiResponse.transactionId !== null && apiResponse.transactionId !== undefined
    ){
        console.log("API Validation Passed");
    } else {
        console.log("API Validation Failed");
    }