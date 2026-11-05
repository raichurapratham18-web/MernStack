// ==========================================
// Q1. STUDENT DETAILS
// Create variables to store student name,
// age, college name and semester.
// Print all values.
// ==========================================

let studentName = "Pratham";
let age = 21;
let collegeName = "RK University";
let semester = 5;

console.log(studentName);
console.log(age);
console.log(collegeName);
console.log(semester);


// ==========================================
// Q2. MONTHLY SALARY
// Store monthly salary of ₹25,000.
// Calculate and print annual salary.
// ==========================================

const employeeSalary = 25000;
const annualSalary = employeeSalary * 12;

console.log(annualSalary);


// ==========================================
// Q3. USER PROFILE UPDATE
// Create username and age variables.
// Update age from 21 to 22.
// Print updated details.
// ==========================================

let userName = "Pratham";
let userAge = 21;

userAge = 22;

console.log(userName, userAge);


// ==========================================
// Q4. SHOPPING BILL
// Store product price and quantity.
// Calculate the total bill.
// ==========================================

const productPrice = 3000;
let quantity = 3;

const totalBill = productPrice * quantity;

console.log(totalBill);


// ==========================================
// Q5. VARIABLE DECLARATION
// Demonstrate reassignment using var,
// let and const.
// ==========================================

var user = "Pratham";
let userAge2 = 21;
const phoneNumber = "+919422034527";

user = "Pratham Raichura";
userAge2 = 22;

// phoneNumber = "1234567890";
// Uncommenting this causes an error.

console.log(user);
console.log(userAge2);
console.log(phoneNumber);


// ==========================================
// Q6. VARIABLE BEHAVIOUR
// Predict the output and explain why.
// ==========================================

let a = 10;
let b = a;

b = 50;

console.log(a); // 10
console.log(b); // 50