# Lesson 04 – JavaScript Conditional Statements

## Overview

In this lesson, I learned how to use conditional statements in JavaScript to make decisions based on different conditions.

As a QA learner, I also practiced using these conditions in real-world scenarios, such as customer eligibility checks, data pack purchases, and API response validation.

## Topics Covered

- `if` statement
- `if-else` statement
- `if-else-if` statement
- Nested `if-else`
- `switch-case` statement
- Ternary operator
- Logical conditions using `&&`
- API response validation

## 1. If-Else and Nested Conditions

I practiced validating a customer's eligibility before purchasing a data pack.

The purchase request depends on three conditions:

- Customer must be active.
- Customer must have sufficient balance.
- Customer must not have any outstanding loan.

**Example:**

```javascript
let customerBalance = 150;
let packPrice = 99;
let isCustomerActive = true;
let hasOutstandingLoan = false;

if (isCustomerActive === true) {
    if (customerBalance >= packPrice) {
        if (hasOutstandingLoan === false) {
            console.log("Purchase request is successful.");
            console.log("Purchase Amount:", packPrice);
            console.log("Remaining Balance:", customerBalance - packPrice);
        } else {
            console.log("Customer has an outstanding loan.");
        }
    } else {
        console.log("Insufficient balance.");
    }
} else {
    console.log("Customer is not active.");
}
```

## 2. Switch Statement

I used a `switch-case` statement to validate different API transaction statuses.

**Example:**

```javascript
let apiResponse = {
    status: "SUCCESS",
    message: "Request successful.",
    amount: 100,
    transactionId: "txn123456"
};

switch (apiResponse.status) {
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
```

## 3. API Response Validation

I practiced validating an API response using multiple conditions.

The validation checks:

- Status must be `SUCCESS`.
- Amount must be `100`.
- Transaction ID must not be empty, null, or undefined.

**Example:**

```javascript
if (
    apiResponse.status === "SUCCESS" &&
    apiResponse.amount === 100 &&
    apiResponse.transactionId !== "" &&
    apiResponse.transactionId !== null &&
    apiResponse.transactionId !== undefined
) {
    console.log("API Validation Passed");
} else {
    console.log("API Validation Failed");
}
```

## 4. QA Test Scenarios

| Test Case | Test Condition                                                  | Expected Result       |
| --------- | --------------------------------------------------------------- | --------------------- |
| TC01      | Active customer with sufficient balance and no outstanding loan | Purchase Successful   |
| TC02      | Customer has insufficient balance                               | Purchase Failed       |
| TC03      | Customer is inactive                                            | Purchase Failed       |
| TC04      | Customer has an outstanding loan                                | Purchase Failed       |
| TC05      | API status is SUCCESS and all values are valid                  | API Validation Passed |
| TC06      | API amount is incorrect                                         | API Validation Failed |
| TC07      | Transaction ID is empty                                         | API Validation Failed |

## Key Learnings

- How JavaScript makes decisions using conditional statements.
- How to handle multiple conditions using nested `if-else`.
- How to use `switch-case` for different API response statuses.
- How to validate API response data using logical operators.
- How to translate manual QA test scenarios into JavaScript conditions.

## Practice Checklist

- [x] Learned if-else statements.
- [x] Practiced nested conditions.
- [x] Learned switch-case.
- [x] Practiced API response validation.
- [x] Created QA-related examples.
- [x] Completed all challenge test cases.
- [x] Committed and pushed the lesson to GitHub.

## Next Lesson

**Lesson 05 – JavaScript Loops**

In the next lesson, I will learn how to execute repetitive tasks using loops and apply them to multiple test data scenarios.

---

*Part of my JavaScript and QA Automation learning journey.*
