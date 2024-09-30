//Here's a concise overview of the main data types in JavaScript:

/********************** -:Primitive types:- ******************************/
/* There are 7 types of primitive data types like:-- 
 
        1. Number
        2. String
        3. Boolean
        4. Null
        5. Undefined
        6. BigInt
        7. Symbol

*/

// 1. Number: 
// The number data type is used to store numeric values. It can be either integer or floating point
 let integerType = 44
 let floatType = 3.3
console.table([
    integerType,
    floatType
]);


// 2. String

let singleQuotes = 'Hello';
let doubleQuotes = "World";
let backticks = `Template literal`;
console.table([ singleQuotes, doubleQuotes, backticks ]);

// 3. Boolean


let isHuman = true;
let isFalse = false;

// 4. Undefined :-- Undefined:- Represents a variable that has been declared but not assigned a value.

let undefinedVariable;
console.log(undefinedVariable); // output  for this variable should be undefined 


// 5. Null: Represents a deliberate non-value or absence of any object value.
// NOTE: If we check type of null then it should return object type 

let nullVariable = null;
console.log(nullVariable); // output for this variable should be null
console.log( typeof nullVariable); // output for this variable should be object


// 6. Symbol is a primitive data type in JavaScript. It is used to create a unique identifier for objects

let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
console.log(sym1 === sym2); // Output: false


// 7. BigInt : Represents integers larger than 2^53 - 1.

let bigNumber = 1234567890123456789012345678901234567890n;



/***************************** Non Primitive Types (Reference Type) *************************************/

/* There are mainly three types of non primitive data types liek:-
        1. Object
        2. Array
        3. Functions
*/

// 1. Object type: Objects are collections of key-value pairs

let person = {
    name: 'John',
    age: 30
  };

  console.log(person);
  

// 2.  Arrays are special types of objects used to store ordered collections.
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// 3. functions are also consider as a object in javascript 

function greet(person) {
    return `Hello, ${person.name}!`;
  }

  console.log(greet(person));
