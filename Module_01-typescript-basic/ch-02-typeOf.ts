/*
 *  'typeof' Operator in TypeScript
 *
 * The `typeof` operator is used to determine the type of a variable or value at runtime.
 * It's also used in TypeScript at compile-time to infer the type from another variable.
 */

// Runtime typeof examples (same behavior as JavaScript)
console.log("Basic Examples of typeof:");

// String
let str: string = "Hello, World!";
console.log(typeof str); // Output: string

// Number
let num: number = 42;
console.log(typeof num); // Output: number

// Boolean
let isActive: boolean = true;
console.log(typeof isActive); // Output: boolean

// Undefined
let notDefined: undefined;
console.log(typeof notDefined); // Output: undefined

// Null (special case)
let empty: null = null;
console.log(typeof empty); // Output: object (JS/TS quirk)

// Object
let obj: { name: string; age: number } = { name: "Alice", age: 25 };
console.log(typeof obj); // Output: object

// Array
let arr: number[] = [1, 2, 3];
console.log(typeof arr); // Output: object (arrays are also objects)

// Function
function greet(): string {
  return "Hello!";
}
console.log(typeof greet); // Output: function

// Symbol
let sym: symbol = Symbol("unique");
console.log(typeof sym); // Output: symbol

// BigInt
let bigIntNum: bigint = 12345678901234567890n;
console.log(typeof bigIntNum); // Output: bigint

/*
 * Special Cases with typeof
 */
console.log("\nSpecial Cases:");

// NaN
let invalidNumber: number = NaN;
console.log(typeof invalidNumber); // Output: number

// Infinity
let infiniteValue: number = Infinity;
console.log(typeof infiniteValue); // Output: number

// Primitives vs Wrapper Objects
console.log("\nPrimitives vs Objects:");
let primitiveValue: number = 10;
let objectValue: Number = new Number(10);
console.log(typeof primitiveValue); // Output: number
console.log(typeof objectValue);    // Output: object

/*
 * Using typeof in Conditional Statements
 */
console.log("\nUsing typeof in Conditions:");
let value: unknown = "123";
if (typeof value === "string") {
  console.log("The value is a string!");
}

console.log("\nCommon Use Cases:");
let dynamicValue: any = 100;
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
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let personInstance = new Person("John");
console.log(typeof Person);         // Output: function (class is function internally)
console.log(typeof personInstance); // Output: object

// Miscellaneous typeof checks
console.log(typeof 12);       // number
console.log(typeof 12.4);     // number

console.log(typeof "abc");    // string
console.log(typeof 'name');   // string

console.log(typeof true);     // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (JS quirk)
console.log(typeof { name: "Tilak" }); // object
console.log(typeof NaN);      // number

// typeof returns a string
console.log(typeof (typeof 12)); // string

/*
 * TypeScript Specific Use of `typeof`
 */
console.log("\nTypeScript Specific Usage:");

// Using typeof for compile-time type inference
const username = "tilak";
type UsernameType = typeof username; // inferred as: string

const settings = {
  theme: "dark",
  fontSize: 14,
};
type SettingsType = typeof settings;
/*
  SettingsType is inferred as:
  {
    theme: string;
    fontSize: number;
  }
*/

let userSettings: SettingsType = {
  theme: "light",
  fontSize: 16,
};

// Summary
console.log("\nSummary:");
console.log("`typeof` helps identify value types at runtime, and infers types from values at compile-time in TypeScript.");
