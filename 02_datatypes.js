
// ==========================================
// JAVASCRIPT PRACTICE
// TOPIC: DATA TYPES
// ==========================================


// ==========================================
// Q1. USER PROFILE
// Create variables for username, age,
// login status and phone number.
// Print their values and data types.
// ==========================================

let username = "Pratham";
let age = 21;
let isLoggedIn = true;
let phoneNumber = "9876543210";

console.log(username, age, isLoggedIn, phoneNumber);

console.log(typeof username);     // string
console.log(typeof age);          // number
console.log(typeof isLoggedIn);   // boolean
console.log(typeof phoneNumber);  // string

// Phone numbers are stored as strings
// because we don't perform calculations on them.


// ==========================================
// Q2. PRODUCT INFORMATION
// Create variables for product name, price,
// availability and discount.
// Print their values and data types.
// ==========================================

let productName = "Laptop";
const price = 55000;
let inStock = true;
let discount = null;

console.log(productName, price, inStock, discount);

console.log(typeof productName);  // string
console.log(typeof price);        // number
console.log(typeof inStock);      // boolean
console.log(typeof discount);     // object

// typeof null returns "object" due to
// a historical JavaScript behaviour.


// ==========================================
// Q3. UNDEFINED VS NULL
// Create userEmail with undefined and
// userAddress with null.
// Print their values and data types.
// ==========================================

let userEmail = undefined;
let userAddress = null;

console.log(userEmail);            // undefined
console.log(userAddress);          // null

console.log(typeof userEmail);     // undefined
console.log(typeof userAddress);   // object

// undefined: A variable has no assigned value.
// null: An intentionally empty value.


// ==========================================
// Q4. TYPE CONVERSION
// Convert userAge and userMarks from strings
// into numbers and calculate their total.
// ==========================================

let userAge = "21";
let userMarks = "85";

userAge = Number(userAge);
userMarks = Number(userMarks);

const total = userAge + userMarks;

console.log(total);                // 106

console.log(typeof userAge);       // number
console.log(typeof userMarks);     // number

// Number() converts a numeric string into a number.


// ==========================================
// Q5. TYPE COERCION CHALLENGE
// Predict and verify the output of each expression.
// ==========================================

console.log("10" + 5);     // "105"
console.log("10" - 5);     // 5
console.log("10" * 2);     // 20
console.log(true + 1);     // 2
console.log(false + 5);    // 5

// Explanation:
// + with a string performs concatenation.
// -, *, / generally convert numeric strings into numbers.
// true converts to 1.
// false converts to 0.

// This automatic conversion is called Type Coercion.


// ==========================================
// Q6. REAL-WORLD API DATA
// An API returns product information.
// Print every property's data type.
// Convert price into a number.
// Calculate 10% discount.
// Check product availability.
// Print the final discounted price.
// ==========================================

let product = {
    name: "Smartphone",
    price: "25000",
    available: true,
    rating: 4.5,
    description: null
};

// Print data types
console.log(typeof product.name);         // string
console.log(typeof product.price);        // string
console.log(typeof product.available);    // boolean
console.log(typeof product.rating);       // number
console.log(typeof product.description);  // object

// Convert price into a number
const productPrice = Number(product.price);

// Calculate 10% discount
const discountAmount = productPrice * 0.10;

// Check product availability
console.log("Available:", product.available);

// Calculate final discounted price
const finalPrice = productPrice - discountAmount;

console.log("Original Price:", productPrice);       // 25000
console.log("Discount:", discountAmount);           // 2500
console.log("Final Price:", finalPrice);            // 22500


// ==========================================
// END OF DATA TYPES PRACTICE
// ==========================================
