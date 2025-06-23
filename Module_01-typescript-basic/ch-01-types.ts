/*
 *  Data Types in TypeScript
 */

console.log("\nVariable Data Types:");

// Basic Types
let str: string = "Hello";            // String
let num: number = 42;                 // Number
let isActive: boolean = true;         // Boolean
let nothing: null = null;             // Null
let notDefined: undefined;            // Undefined
let obj: { a: number } = { a: 1 };    // Object with a typed property
let arr: number[] = [1, 2, 3];        // Array of numbers

console.log(typeof str);        // Output: string
console.log(typeof num);        // Output: number
console.log(typeof isActive);   // Output: boolean
console.log(typeof nothing);    // Output: object (still a historical quirk)
console.log(typeof notDefined); // Output: undefined
console.log(typeof obj);        // Output: object
console.log(typeof arr);        // Output: object (arrays are also objects)

// Number Examples
let intNum: number = 12;
let floatNum: number = 3.45;
let negativeNum: number = -45;

console.log(intNum);
console.log(floatNum);
console.log(negativeNum);

// String Examples
let singleQuoted: string = 'This is also a string under single quotes';
let doubleQuoted: string = "This is a string";
let templateLiteral: string = `This is also another kind of string inside backticks`;

console.log(doubleQuoted);
console.log(singleQuoted);
console.log(templateLiteral);

// Boolean Examples
let truth: boolean = true;
let falsy: boolean = false;

console.log(truth);
console.log(falsy);

// Undefined and Null
let undef: undefined = undefined;
let nulled: null = null;

console.log(undef);
console.log(nulled);

// Object Example
let person: { name: string } = { name: "tilak" };

console.log(person);
