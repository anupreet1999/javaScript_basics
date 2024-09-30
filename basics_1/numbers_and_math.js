/* Number
*Number values represent floating-point numbers like 37 or -9.25.

The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
*/

255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)


Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN

/*
Number()
Creates Number objects. When called as a function, it returns primitive values of type Number.
*/

const num = new Number(100);
console.log(num);

const convert = num.toString();
console.log(typeof(convert)); // "100"
console.log(num.toString());

console.log(num.toFixed(2));

const preNum = 123.99292

console.log(preNum.toPrecision(4));


const commaNum = 1000000
console.log(commaNum.toLocaleString('en-IN'));


// ********************************* Math *****************************



console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(19.60));
console.log(Math.ceil(19.60));
console.log(Math.floor(19.60));
console.log(Math.random()*10 + 1);

console.log(Math.floor(Math.random()*10 +1) + 1);

const min =10
const max = 20


console.log(Math.floor(Math.random()*(max - min) + 1) + min);