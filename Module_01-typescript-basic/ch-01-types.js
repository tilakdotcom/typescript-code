/*
 *  Data Types in TypeScript
 */
console.log("\nVariable Data Types:");
// Basic Types
var str = "Hello"; // String
var num = 42; // Number
var isActive = true; // Boolean
var nothing = null; // Null
var notDefined; // Undefined
var obj = { a: 1 }; // Object with a typed property
var arr = [1, 2, 3]; // Array of numbers
console.log(typeof str); // Output: string
console.log(typeof num); // Output: number
console.log(typeof isActive); // Output: boolean
console.log(typeof nothing); // Output: object (still a historical quirk)
console.log(typeof notDefined); // Output: undefined
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (arrays are also objects)
// Number Examples
var intNum = 12;
var floatNum = 3.45;
var negativeNum = -45;
console.log(intNum);
console.log(floatNum);
console.log(negativeNum);
// String Examples
var singleQuoted = 'This is also a string under single quotes';
var doubleQuoted = "This is a string";
var templateLiteral = "This is also another kind of string inside backticks";
console.log(doubleQuoted);
console.log(singleQuoted);
console.log(templateLiteral);
// Boolean Examples
var truth = true;
var falsy = false;
console.log(truth);
console.log(falsy);
// Undefined and Null
var undef = undefined;
var nulled = null;
console.log(undef);
console.log(nulled);
// Object Example
var person = { name: "tilak" };
console.log(person);
