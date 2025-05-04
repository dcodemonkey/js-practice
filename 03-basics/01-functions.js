// console.log("K");
// console.log("u");
// console.log("n");
// console.log("a");
// console.log("l");

// function declaration 
function sayMyName(){
    console.log("K");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("l");
}

// sayMyName // function expression
// sayMyName() // function call

// Parameters is a variable in the function declaration
// Arguments is a value passed to the function when it is called
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2, 3);

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
// }

// const result = addTwoNumbers(2, 3);
// console.log(result); // 5


function loginUserMessage(username){
    return `User logged in with username: ${username}`;
}

loginUserMessage("Kunal");
// console.log(loginUserMessage("Kunal")); // User logged in with username: Kunal


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(100)); // 100


function calculateCartPrice(val1,val2,...num1){ // rest operator 
    return [val1,val2,num1];
}

// console.log("More than one argument:",calculateCartPrice(100,200,300)); // More than one argument: [ 300 ] because of rest operator

const user = {
    username: "Kunal",
    price: 100,
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user); // User name is Kunal and proice is 100 

// handleObject({
//     username: "Kunal",
//     price: 100,
// }); // User name is Kunal and proice is 100

const myNewArray = [1,2,3,4,5];

function handleArray(getArray){
    return getArray[2]
}
// console.log(handleArray(myNewArray)) // [ 1, 2, 3, 4, 5 ]
console.log(handleArray([1,2,3,4,5])) // [ 1, 2, 3, 4, 5 ]



