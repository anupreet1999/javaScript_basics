
const symbolVal = Symbol("Anupreet")

const user = 
    {
        firstName: 'Anupreet',
        lastName: 'Mishra',
        age: 30,
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        greet() {  // ES6 shorthand method definition
            name = this.firstName + ' ' + this.lastName;
            return name;
        },
        email: "anupreet.mishra2@gmail.com",
        [symbolVal]: "Mishra",
        occupation: 'Software Engineer',
        address: {
            city: 'Lucknow',
            state: 'Uttar Pradesh',
            zip: '12345'
        },
        
            
    }
    //we can access object values using dot(.)
console.log(user.email);

// we can access object values using square brackets []
console.log(`User email:  ${user["email"]}`);

// How to access symbols's values from a object
console.log(`Symbol Value: ${user[symbolVal]}`);


// How to access function values from an object
console.log(user.fullName());

const fullNameResponse = user.greet();
console.log(fullNameResponse);


// How to access object from a object 
console.log(user["address"]);


// Push any changes into object
const newEmail = "anupreetmishra22@gmail.com"
user.email = newEmail;
console.log(user["email"]);

// Object.freeze(user);

// we can't push any changes into object after using Object.freeze() method

user.email = "anupreetmishra2112@gmail.com"
console.log(user.email);


// How to access values inside function brings values from object
user.greetings = function(){
    console.log(`Hello,  ${this.fullName()} Welcome to the Javascript Learning Portal`);
}
console.log(user.greetings());
