
/*
=========================================================
  FILE NAME : 03_conversionOperation.js
  TOPIC     : Type Conversion, Coercion & Operations
  PURPOSE   : JavaScript Practice and Revision
=========================================================

  CONTENTS:
  1. Type Conversion
  2. Number Conversion
  3. Boolean Conversion
  4. String Conversion
  5. Type Coercion
  6. Arithmetic Operations
  7. Assignment Operations
  8. Increment & Decrement
  9. Operator Precedence
*/


// =======================================================
// SECTION 1: HITESH SIR'S NOTES - TYPE CONVERSION
// =======================================================

// Type Conversion means manually converting one data
// type into another data type.

// Example: String to Number

// let score = "33";

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);        // 33


// IMPORTANT NUMBER CONVERSION RULES:

// "33"       => 33
// "33abc"    => NaN
// true       => 1
// false      => 0
// null       => 0
// undefined  => NaN


// BOOLEAN CONVERSION:

// let isLoggedIn = "Pratham";

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // true


// IMPORTANT BOOLEAN CONVERSION RULES:

// 1          => true
// 0          => false
// ""         => false
// "Pratham"  => true
// "false"    => true
// null       => false


// STRING CONVERSION:

// let someNumber = 33;

// let stringNumber = String(someNumber);

// console.log(stringNumber);        // "33"
// console.log(typeof stringNumber); // string



// =======================================================
// SECTION 2: HITESH SIR'S NOTES - OPERATIONS
// =======================================================

// Arithmetic Operations

// console.log(2 + 2);  // Addition:       4
// console.log(2 - 2);  // Subtraction:    0
// console.log(2 * 2);  // Multiplication: 4
// console.log(2 ** 3); // Exponentiation: 8
// console.log(2 / 3);  // Division:       0.666...
// console.log(2 % 3);  // Remainder:      2


// Negative Value

// let value = 3;
// let negValue = -value;

// console.log(negValue); // -3


// String Concatenation

// let str1 = "hello";
// let str2 = " Pratham";

// let str3 = str1 + str2;

// console.log(str3); // hello Pratham


// Type Coercion Examples

// JavaScript automatically converts data types
// during certain operations.

// console.log("1" + 2);   // "12"
// console.log(1 + "2");   // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"


// Operator Precedence

// console.log((3 + 4) * 5 % 3); // 2


// Unary Plus Operator

// console.log(+true); // 1
// console.log(+"");   // 0


// Chained Assignment

// let num1, num2, num3;

// num1 = num2 = num3 = 2 + 2;

// console.log(num1, num2, num3); // 4 4 4


// Increment Operator

// let gameCounter = 100;

// ++gameCounter;

// console.log(gameCounter); // 101



// =======================================================
// SECTION 3: PRACTICE QUESTIONS WITH CORRECTED ANSWERS
// =======================================================


// -------------------------------------------------------
// Q1. NUMBER CONVERSION
// -------------------------------------------------------

// QUESTION:
// Convert all the given variables into Number.
// Print their converted values and data types.

// ANSWER:

let number = "45";
let number2 = "99.5";
let numstr = "45abc";
let bool = true;
let bool2 = false;

number = Number(number);
number2 = Number(number2);
numstr = Number(numstr);
bool = Number(bool);
bool2 = Number(bool2);

console.log("Q1 - Number Conversion:");

console.log(number, typeof number);   // 45, number
console.log(number2, typeof number2); // 99.5, number
console.log(numstr, typeof numstr);   // NaN, number
console.log(bool, typeof bool);       // 1, number
console.log(bool2, typeof bool2);     // 0, number



// -------------------------------------------------------
// Q2. BOOLEAN CONVERSION
// -------------------------------------------------------

// QUESTION:
// Convert all the given variables into Boolean.
// Print their converted values and data types.

// ANSWER:

let variable = 1;
let variable2 = 0;
let variable3 = "";
let variable4 = "Pratham";
let variable5 = "false";
let variable6 = null;

variable = Boolean(variable);
variable2 = Boolean(variable2);
variable3 = Boolean(variable3);
variable4 = Boolean(variable4);
variable5 = Boolean(variable5);
variable6 = Boolean(variable6);

console.log("Q2 - Boolean Conversion:");

console.log(variable, typeof variable);   // true, boolean
console.log(variable2, typeof variable2); // false, boolean
console.log(variable3, typeof variable3); // false, boolean
console.log(variable4, typeof variable4); // true, boolean
console.log(variable5, typeof variable5); // true, boolean
console.log(variable6, typeof variable6); // false, boolean



// -------------------------------------------------------
// Q3. STRING CONVERSION
// -------------------------------------------------------

// QUESTION:
// Convert userAge, userMarks and isLoggedIn into Strings.
// Print their converted values and data types.

// ANSWER:

let userAge = 21;
let userMarks = 85;
let isLoggedIn = true;

userAge = String(userAge);
userMarks = String(userMarks);
isLoggedIn = String(isLoggedIn);

console.log("Q3 - String Conversion:");

console.log(userAge, typeof userAge);       // "21", string
console.log(userMarks, typeof userMarks);   // "85", string
console.log(isLoggedIn, typeof isLoggedIn); // "true", string



// -------------------------------------------------------
// Q4. TYPE COERCION
// -------------------------------------------------------

// QUESTION:
// Predict the output of each expression.
// Identify whether the result is String or Number.

// ANSWER:

console.log("Q4 - Type Coercion:");

console.log("10" + 5);    // "105" - String
console.log("10" - 5);    // 5 - Number
console.log("10" * 2);    // 20 - Number
console.log("10" / 2);    // 5 - Number
console.log("10" + 5 + 2); // "1052" - String
console.log(10 + 5 + "2"); // "152" - String

// Explanation:
// + with a string performs concatenation.
// -, * and / convert numeric strings into numbers.
// Expressions are evaluated from left to right.



// -------------------------------------------------------
// Q5. SHOPPING BILL CALCULATION
// -------------------------------------------------------

// QUESTION:
// A customer purchases:
// 3 notebooks at Rs. 50 each.
// 2 pens at Rs. 20 each.
// Calculate the total bill and remaining balance from Rs. 500.

// ANSWER:

let notebookPrice = 50;
let penPrice = 20;

let totalAmountSpent = (notebookPrice * 3) + (penPrice * 2);

let remainingAmount = 500 - totalAmountSpent;

console.log("Q5 - Shopping Bill:");

console.log("Total Amount:", totalAmountSpent); // 190
console.log("Remaining Amount:", remainingAmount); // 310



// -------------------------------------------------------
// Q6. SALARY OPERATIONS
// -------------------------------------------------------

// QUESTION:
// An employee has a starting salary of Rs. 25,000.
// Increase salary by Rs. 5,000 using +=
// Deduct Rs. 2,000 using -=
// Print the final salary.

// ANSWER:

let startingSalary = 25000;

startingSalary += 5000;

console.log("Salary after increment:", startingSalary); // 30000

startingSalary -= 2000;

console.log("Final Salary:", startingSalary); // 28000

// Explanation:
// startingSalary += 5000;
// Means startingSalary = startingSalary + 5000;
//
// startingSalary -= 2000;
// Means startingSalary = startingSalary - 2000.
//
// IMPORTANT:
// Declare the variable before updating it.



// -------------------------------------------------------
// Q7. INCREMENT AND DECREMENT
// -------------------------------------------------------

// QUESTION:
// Predict the output of prefix and postfix
// increment and decrement operators.

// ANSWER:

let gameCounter = 100;

console.log("Q7 - Increment & Decrement:");

console.log(++gameCounter); // 101
console.log(gameCounter++); // 101
console.log(gameCounter);   // 102
console.log(--gameCounter); // 101
console.log(gameCounter--); // 101
console.log(gameCounter);   // 100

// Explanation:
//
// ++variable = Prefix increment
// First increments the value, then returns it.
//
// variable++ = Postfix increment
// First returns the current value, then increments it.
//
// --variable = Prefix decrement
// First decrements the value, then returns it.
//
// variable-- = Postfix decrement
// First returns the current value, then decrements it.



// -------------------------------------------------------
// Q8. OPERATOR PRECEDENCE
// -------------------------------------------------------

// QUESTION:
// Predict the output of each expression.

// ANSWER:

console.log("Q8 - Operator Precedence:");

console.log(2 + 3 * 4);       // 14
console.log((2 + 3) * 4);     // 20
console.log(10 % 3);          // 1
console.log(2 ** 3);          // 8
console.log((3 + 4) * 5 % 3); // 2

// Explanation:
//
// 1. Multiplication is performed before addition.
// 2. Parentheses are evaluated first.
// 3. % returns the remainder.
// 4. ** represents exponentiation.
//
// Example:
// 10 % 3 = 1
// Because 10 divided by 3 leaves remainder 1.
//
// (3 + 4) * 5 % 3
// = 7 * 5 % 3
// = 35 % 3
// = 2



// =======================================================
// END OF PRACTICE FILE
// =======================================================
