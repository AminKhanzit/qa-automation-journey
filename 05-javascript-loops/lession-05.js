//Javascript Loops

let packPrice =[29, 49, 99, 149, 299];

for(let i=0; i<packPrice.length; i++){
    console.log("Pack Price List: ", packPrice[i]);
}



for(let price of packPrice){
    console.log("Pack Price List: ", price);
}

//শুধু যেসব pack-এর price 100 টাকার বেশি, সেগুলো print 

for(let prices of packPrice){
    if(prices>100){
        console.log("Pack Price:", prices);
    }
    
}

//while loop
let i=1;

while (i<=5){
    console.log("Numbers are: ", i);
    i++;
}

//Break 

let packPrices = [29, 49, 99, 149, 299];

for(let prices of packPrices){
    if(prices === 149){
        break;
    }
    console.log("Pack Price:", prices);

}

//continue

let packPrices1 = [29, 49, 99, 149, 299];

for(let prices of packPrices1){
    if(prices === 149){
        continue;
    }
    console.log("Pack Price:", prices);

}

//do while loop

let attempt =1;

do{
    console.log("You have ", attempt, " attempts left");
    attempt++;
} while(attempt >= 3);

//Final Assignment

//task -01

let packPrices2 = [29, 49, 99, 149, 299];
let expectedMaxPrice = 200;

for(let prices of packPrices2){

    if(prices <= expectedMaxPrice){
    console.log("Pack Price:", prices, "- Teest Passed");
    
}
else {
    console.log("Pack Price:", prices, "- Test Failed");
}
}

//task -02

let testCases = [
    "Login Test",
    "Recharge Test",
    "Data Pack Purchase",
    "Gifting Test",
    "Payment Test"
];

for(let testCase of testCases){
    console.log("Executing:",testCase);
}

//task -03

let testResults = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "FAIL"
];

for(let testResult of testResults){
    if(testResult === "FAIL"){
        continue;
    }
    console.log("Test Result:", testResult);
}

//task -04

let testResults1 = [
    "PASS",
    "PASS",
    "FAIL",
    "PASS",
    "FAIL"
];

for(let testResult of testResults1){
    if(testResult === "FAIL"){
        break;
    }
    console.log("Test Result:", testResult);
}

//task -05
let j=1;

while(j<=5){
    console.log("Executing Test Case:", j);
    j++;
}
