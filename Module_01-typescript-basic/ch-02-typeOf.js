/*
 *  'typeof' Operator in TypeScript
 *
 * The `typeof` operator is used to determine the type of a variable or value at runtime.
 * It's also used in TypeScript at compile-time to infer the type from another variable.
 */
// Runtime typeof examples (same behavior as JavaScript)
console.log("Basic Examples of typeof:");
// String
var str = "Hello, World!";
console.log(typeof str); // Output: string
// Number
var num = 42;
console.log(typeof num); // Output: number
// Boolean
var isActive = true;
console.log(typeof isActive); // Output: boolean
// Undefined
var notDefined;
console.log(typeof notDefined); // Output: undefined
// Null (special case)
var empty = null;
console.log(typeof empty); // Output: object (JS/TS quirk)
// Object
var obj = { name: "Alice", age: 25 };
console.log(typeof obj); // Output: object
// Array
var arr = [1, 2, 3];
console.log(typeof arr); // Output: object (arrays are also objects)
// Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // Output: function
// Symbol
var sym = Symbol("unique");
console.log(typeof sym); // Output: symbol
// BigInt
var bigIntNum = 12345678901234567890n;
console.log(typeof bigIntNum); // Output: bigint
/*
 * Special Cases with typeof
 */
console.log("\nSpecial Cases:");
// NaN
var invalidNumber = NaN;
console.log(typeof invalidNumber); // Output: number
// Infinity
var infiniteValue = Infinity;
console.log(typeof infiniteValue); // Output: number
// Primitives vs Wrapper Objects
console.log("\nPrimitives vs Objects:");
var primitiveValue = 10;
var objectValue = new Number(10);
console.log(typeof primitiveValue); // Output: number
console.log(typeof objectValue); // Output: object
/*
 * Using typeof in Conditional Statements
 */
console.log("\nUsing typeof in Conditions:");
var value = "123";
if (typeof value === "string") {
    console.log("The value is a string!");
}
console.log("\nCommon Use Cases:");
var dynamicValue = 100;
if (typeof dynamicValue === "number") {
    console.log("It's a number!");
}
dynamicValue = "Dynamic String";
if (typeof dynamicValue === "string") {
    console.log("Now it's a string!");
}
/*
 * typeof with Classes and Instances
 */
console.log("\nClasses and Instances:");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var personInstance = new Person("John");
console.log(typeof Person); // Output: function (class is function internally)
console.log(typeof personInstance); // Output: object
// Miscellaneous typeof checks
console.log(typeof 12); // number
console.log(typeof 12.4); // number
console.log(typeof "abc"); // string
console.log(typeof 'name'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JS quirk)
console.log(typeof { name: "Tilak" }); // object
console.log(typeof NaN); // number
// typeof returns a string
console.log(typeof (typeof 12)); // string
/*
 * TypeScript Specific Use of `typeof`
 */
console.log("\nTypeScript Specific Usage:");
// Using typeof for compile-time type inference
var username = "tilak";
var settings = {
    theme: "dark",
    fontSize: 14,
};
/*
  SettingsType is inferred as:
  {
    theme: string;
    fontSize: number;
  }
*/
var userSettings = {
    theme: "light",
    fontSize: 16,
};
// Summary
console.log("\nSummary:");
console.log("`typeof` helps identify value types at runtime, and infers types from values at compile-time in TypeScript.");
