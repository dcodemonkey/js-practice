// singleton
// Object.create

// Object literals

const mySym = Symbol("mySym") // Symbol is a primitive data type in JS

const JsUser = {
    name: "Kunal",
    "fullName": "Kunal Choudhary",
    age: 28,
    [mySym]: "MyValue", // we can use mySym as a key but type of key will not be symbol it will be string.
    location: "New Delhi",
    email: "kunal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = 'kunal@gmail.com'

// Object.freeze(JsUser) // freeze the object
// JsUser.email = 'kunal@llm.com' // this will not change the email
// Object.seal(JsUser) // seal the object
// Object.preventExtensions(JsUser) // prevent the object from being extended  

// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS Users!!!");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS Users!!! ${this.name}`);
}
// console.log(JsUser);

// console.log(JsUser.greeting); // this will print the function
console.log(JsUser.greeting()); // this will print the output of the function
console.log(JsUser.greetingTwo()); // this will print the output of the function






