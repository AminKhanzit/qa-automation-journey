# JavaScript Lesson 02 – Data Types & Variables

## Lesson Overview
**Topic:** JavaScript Variables and Data Types  
**Level:** Beginner  
**Project:** QA Automation Journey

## Learning Objectives
In this lesson, I learned:

- How to declare variables using `let`, `const`, and `var`
- Difference between `let` and `const`
- JavaScript primitive data types
- String, Number, Boolean, Undefined, and Null
- How to use the `typeof` operator
- How to identify data types during QA validation

## JavaScript Data Types

| Data Type | Example | Description |
|---|---|---|
| String | `"Amin Khan"` | Text data |
| Number | `250` | Numeric value |
| Boolean | `true` | True or False |
| Undefined | `undefined` | Variable without an assigned value |
| Null | `null` | Intentionally empty value |
| Object | `{name: "Amin"}` | Structured data |
| Array | `[100, 200]` | Collection of values |

## Practical Example: Mobile Recharge System

```javascript
let customerName = "Amin Khan";
let accountBalance = 250;
let rechargeAmount = 100;
let isCustomerActive = true;
let lastRechargeStatus = null;

console.log("Customer:", customerName);
console.log("Balance:", accountBalance);
console.log("Recharge:", rechargeAmount);
console.log("Active:", isCustomerActive);
console.log("Last Recharge:", lastRechargeStatus);

console.log("Customer Name Type:", typeof customerName);
console.log("Balance Type:", typeof accountBalance);
console.log("Active Status Type:", typeof isCustomerActive);
```

## QA Testing Application

Data type validation is important when testing APIs and application responses.

Example:
- Recharge amount should be a Number.
- Customer name should be a String.
- Customer active status should be a Boolean.
- Unexpected data types may cause application errors.

## Key Takeaways

- Variables store data.
- `let` allows reassignment.
- `const` does not allow reassignment.
- `typeof` identifies a value's data type.
- A value inside quotation marks is a String, even if it looks numeric.

## Practice Tasks

- [ ] Create variables using different data types.
- [ ] Check data types using `typeof`.
- [ ] Change variable values and observe the output.
- [ ] Complete the Lesson 02 knowledge check.
- [ ] Save the lesson in GitHub.

## Repository Structure

```text
qa-automation-journey/
└── 02-javascript-data-types/
    ├── lesson-02.js
    └── README.md
```

---

**Learning Journey:** Manual QA → JavaScript → Playwright → API Automation → Mobile Automation