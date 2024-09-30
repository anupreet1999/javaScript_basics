const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;


const string4 = new String("A String object");

//There are two ways to access an individual character in a string. The first is the charAt() method:

"cat".charAt(1); // gives value "a"
//console.log(`${string4}`.charAt(5));


const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


const str1 = "anupreet"
const str2 = "mishra"
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }
  
console.log(areEqualCaseInsensitive(str1, str2));
  

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object

let value = eval(s1)
console.log(`value for s1 using eval method which provide a int value which is original value storing in quotes ${value}`);
console.log(typeof(value));


let value2 = eval(s2.valueOf()); // returns the number 4

console.log(`value for s1 using eval method which provide a int value which is original value storing in string object  ${value2}`);
console.log(typeof(value2));

console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

const c = new String("Hello world");
console.log(typeof(c));


/****************************************String Methods *****************************************/

//prototype.at()

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

/** codePointAt()
 * The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units, not Unicode code points.
 */

const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"

/********************************************************
 * includes()
 * The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
 */

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"

/***
 * isWellFormed()
 * Returns true if this string does not contain any lone surrogates, false otherwise.
 */

const strings = [
    // Lone leading surrogate
    "ab\uD800",
    "ab\uD800c",
    // Lone trailing surrogate
    "\uDFFFab",
    "c\uDFFFab",
    // Well-formed
    "abc",
    "ab\uD83D\uDE04c",
  ];
  
  for (const str of strings) {
    console.log(str.isWellFormed());
  }
  // Logs:
  // false
  // false
  // false
  // false
  // true
  // true



/**
 * prototype.normalize()
 * The normalize() method of String values returns the Unicode Normalization Form of this string.
 * */  

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true



/**
 * padEnd()
 * The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
 */



console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

console.log(str2.padEnd(25, '.'));
// Expected output: "200  "

/**
 * slice()
 * The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
 */

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"



/** split()
 * The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
 */

const splitStr = 'The quick brown fox jumps over the lazy dog.';

const words = splitStr.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = splitStr.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = splitStr.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


/**
 * substring()
 * The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
 */

const substringStr = 'Mozilla';

console.log(substringStr.substring(1, 3));
// Expected output: "oz"

console.log(substringStr.substring(2));
// Expected output: "zilla"
console.log(substringStr.substring(0,2));

/**
 * [Symbol.iterator]()
 * The [Symbol.iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator object that yields the Unicode code points of the string value as individual strings.
 */

const testStr = "The quick red fox jumped over the lazy dog's back.";

const iterator = testStr[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}


/**
 * 
 * toLocaleUpperCase()
 * The toLocaleUpperCase() method of String values returns this string converted to upper case, according to any locale-specific case mappings.
 */

const dotted = 'india';

console.log(`EN-US: ${dotted.toLocaleUpperCase('en-US')}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleUpperCase('tr')}`);
// Expected output: "istanbul"
