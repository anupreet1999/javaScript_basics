const myDate = new Date();
console.log(myDate);


console.log(`using toDateString function:   ${myDate.toDateString()}`);
console.log(`using toISOString:  ${myDate.toISOString()}`);
console.log(`using toJson function:  ${myDate.toJSON()}`);
console.log(`using localstring function:   ${myDate.toLocaleDateString()}`);
console.log(`using toLocaleTimeString function:   ${myDate.toLocaleTimeString()}`);

const formattedDate = new Date(2024, 9, 20, 3, 23)

console.log(formattedDate.toLocaleString());


let currentDate = new Date()

console.log(currentDate.getMonth())
console.log(currentDate.getDay())
console.log(currentDate.getDate())
console.log(currentDate.getDay())
console.log(currentDate.getFullYear())




 