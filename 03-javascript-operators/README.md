# JavaScript Lesson 03 – Operators

## 📚 Lesson Overview

| Information      | Details                              |
| ---------------- | ------------------------------------ |
| Lesson           | 03                                   |
| Topic            | JavaScript Operators                 |
| Level            | Beginner                             |
| Learning Path    | QA Automation Journey                |
| Practical Domain | Mobile Recharge & Data Pack Purchase |

## 🎯 Learning Objectives

In this lesson, I learned how to use JavaScript operators for calculations, comparisons, conditions, and data validation.

Topics covered:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators
- Increment and Decrement Operators
- Difference between `==` and `===`

## 1. Arithmetic Operators

Used to perform mathematical calculations.

| Operator | Description         | Example    |
| -------- | ------------------- | ---------- |
| `+`      | Addition            | `100 + 50` |
| `-`      | Subtraction         | `100 - 50` |
| `*`      | Multiplication      | `100 * 2`  |
| `/`      | Division            | `100 / 2`  |
| `%`      | Modulus (Remainder) | `10 % 3`   |
| `**`     | Exponentiation      | `2 ** 3`   |

## 2. Comparison Operators

Used to compare two values. The result is always `true` or `false`.

| Operator | Description           |
| -------- | --------------------- |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |
| `===`    | Strict equality       |
| `!==`    | Strict inequality     |

### Important: `==` vs `===`

- `==` compares values after possible type conversion.
- `===` compares both value and data type.

```javascript
console.log(100 == "100");  // true
console.log(100 === "100"); // false
```

## 3. Logical Operators

Used to combine multiple conditions.

| Operator | Description                       |    |                                          |
| -------- | --------------------------------- | -- | ---------------------------------------- |
| `&&`     | AND – All conditions must be true |    |                                          |
| \`       |                                   | \` | OR – At least one condition must be true |
| `!`      | NOT – Reverses the Boolean value  |    |                                          |

## 4. Assignment Operators

| Operator | Example         | Equivalent               |
| -------- | --------------- | ------------------------ |
| `=`      | `balance = 100` | Assign value             |
| `+=`     | `balance += 50` | `balance = balance + 50` |
| `-=`     | `balance -= 20` | `balance = balance - 20` |
| `*=`     | `balance *= 2`  | `balance = balance * 2`  |
| `/=`     | `balance /= 2`  | `balance = balance / 2`  |

## 5. Increment & Decrement

- `++` increases a value by 1.
- `--` decreases a value by 1.

```javascript
let retryCount = 0;

retryCount++;
retryCount++;

console.log(retryCount); // 2
```

## 💻 Practical Example: Mobile Recharge Validation

```javascript
let customerBalance = 500;
let rechargeAmount = 100;
let isCustomerActive = true;

let remainingBalance = customerBalance - rechargeAmount;

let hasSufficientBalance =
    customerBalance >= rechargeAmount;

let canRecharge =
    hasSufficientBalance && isCustomerActive;

console.log("Remaining Balance:", remainingBalance);
console.log("Can Recharge:", canRecharge);
```

### Expected Output

```text
Remaining Balance: 400
Can Recharge: true
```

## 🧪 QA Practice: Data Pack Purchase Eligibility

### Business Scenario

A customer can purchase a data pack if:

1. Account balance is equal to or greater than the pack price.
2. Customer account is active.
3. Customer has no outstanding loan.

### Test Data

| Field            | Value  |
| ---------------- | ------ |
| Customer Balance | 150 TK |
| Data Pack Price  | 99 TK  |
| Customer Active  | true   |
| Outstanding Loan | false  |

### Expected Result

```text
Customer Eligible: true
Purchase Amount: 99
Remaining Balance: 51
```

### Additional Negative Test Case

Set `hasOutstandingLoan = true`.

Expected result:

```text
Customer Eligible: false
```

## 🔍 QA Automation Application

These operators are important for:

- Validating API response values.
- Checking customer eligibility conditions.
- Verifying recharge and purchase calculations.
- Comparing expected and actual results.
- Building conditional test scenarios.
- Writing assertions in Playwright automation.

## 📝 Key Takeaways

- Arithmetic operators perform calculations.
- Comparison operators validate values.
- Logical operators combine multiple conditions.
- Assignment operators update variable values.
- Strict equality (`===`) is useful for reliable data validation.
- Operators are essential for writing automation test logic.

## 📂 Repository Structure

```text
qa-automation-journey/
└── 03-javascript-operators/
    ├── lesson-03.js
    └── README.md
```

## ✅ Lesson Completion Checklist

- [x] Arithmetic Operators
- [x] Comparison Operators
- [x] Logical Operators
- [x] Assignment Operators
- [x] Increment & Decrement
- [x] Mobile Recharge Practical
- [x] Data Pack Eligibility Assignment
- [x] Knowledge Check
- [x] GitHub Commit & Push

---

**Learning Journey:** Manual QA → JavaScript → Playwright → API Automation → Mobile Automation

*Part of my continuous journey toward becoming an Automation QA Engineer.*
