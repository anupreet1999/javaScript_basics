const array = [1, 2,3,4,5]

//  add new value into array
array.push(6)

// remove last value using pop 
array.pop()
console.log(array);


// add a value starting of array using unshift
array.unshift(0)
console.log(array);

// remove starting value  of array using shift
array.shift()
console.log(array);


// concate the array with converting datatype of the array it is converting array to string 
const newArr = array.join()
console.log(newArr);

// output 1,2,3,4

// Using includes method we can find value existed or not in te array
console.log(array.includes(2));
// output true

// Using slice method we can copy a section of values from a array original array will be the same as before after using slice
console.log(array.slice(1,3));
console.log(`Checking original array after usning slice method ${array}`);


// Using splice method we can cut a section of values from a array original array will not be the same as before after using splice 
console.log(array.splice(1,3));
console.log(`Checking original array after usning splice method ${array}`);



//******************************* Combining Two arrays **************************//



const names = ["Anupreet" , " Vikas", "Ravi", "Anurag"]

const  surnames = ["Mishra", "Shukla", "Prabhakar", "Kashyap"] 

// const CombiningUsingPush = names.push(surnames)
// console.log(CombiningUsingPush);

/* Output : ['Anupreet',' Vikas','Ravi','Anurag',[ 'Mishra', 'Shukla', 'Prabhakar', 'Kashyap' ]] 
So based on output we can say push method combining two array like this array push a whole array instead of array values
*/


// const CombiningUsingConcate = names.concat(surnames)
// console.log(CombiningUsingConcate);

/** ['Anupreet', ' Vikas', 'Ravi',   'Anurag', 'Mishra',  'Shukla', 'Prabhakar', 'Kashyap']
 * 
 * So based on output we can say using concat method we will merge two array values and make a new array
 */



// we can use spread method for easy way to combining two array into a single array

const CombiningUsingSpread = [...names, ...surnames]
console.log(`Combining two array values using spread method: ${CombiningUsingSpread}`);


/**
 * Using Flat method we can combinine multiple arrays which is array isnside array 
 */
const multAarray = [1,2,3,[4,5,6,[7,8,9]]]; 
console.log(multAarray.flat(Infinity));

console.log(Array.from('Anupreet'));

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]


// We can convert into array from any datatypes using from
const name = "Anupreet"
console.log(Array.from(name));


// We can convert array using of method

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));
// Output: [ 100, 200, 300 ]

