// console.log(sum(1, 41)); 

// function sum(a, b) {
//     return a + b;
// }

// console.log(i); // undefined 

// var i = 41;

// console.log(i);
// if var variable is not defined then it is undefined 

// difference between var and let

// console.log(num); // ReferenceError: Cannot access 'num' before initialization
// const num = 42; 
// console.log(num);
// // let and const can't be hoisted, so It gives an error

// Function Expression and Function Declaration
console.log(square(25));

// function square(num) { // <-- Function Declaration
//     return num ** 2;
// }

const square = function(num) { // we are assigning function to a variable, so
    // function expression, has to be called after initialisation
    return num ** 2;
}
console.log(square());

// function declaration we can call anywhere, function expression is called only after initialisation