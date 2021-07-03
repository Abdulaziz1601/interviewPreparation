// // In js we have 7 data types
// // Dats types: 

// // null, undefined, boolean, number, string, object, symbol
// // All of those types are primitives, excluding OBJECT
// // So object is not primitive data-type

// console.log(typeof 0 ); // number
// console.log(typeof true); // boolean
// console.log(typeof 'JavaScript'); // String, we've 3 types of quotes "", '', 
// // `` - those are called literals, in which we can put dynamic data

// console.log(typeof undefined); // undefined type
// console.log(typeof Math); // Object
// console.log(typeof Symbol('JS')); // symbol

// // null is a data type, but typeof operator shows us as an object
// console.log(typeof null); // It is null data-type not object

// // What is the difference between "null" and "undefined"
// // if we have variable but it is not assigned to anything, It'll return us undefined
// // Also function that return is not stated return undefined

// // null is assigned to defined variable as a representation of no value


// // data type casting
// let language = 'JavaScript';

// if(language) { // if looks for a boolean value
//     // language is casted to true, boolean value
//     console.log('The best language is: ', language);
// }

// // Some values are casted to FALSE:
// // Falsy Values

// //  '', 0, null, undefined, NaN, false
// console.log(Boolean('')); // false
// console.log(Boolean('Hello')); // true
// // If we have any character not empty string, It will give us "true"
// console.log(Boolean(' ')); // true, 'cause we have space character
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false, number 0 included in falsy values list
// console.log(Boolean(null));


// // Truthy Values are {}, [], function() {} and etc... 
// // Truthy values are any values that aren't included in falsy values list
// console.log(Boolean([]));// true
// console.log(Boolean({}));// true
// console.log(Boolean(function() {}));// true

// Combination of numbers and strings
console.log(1 +'2'); // 12 string , 'cause 1, turned(casted) into String, js says this is concatenation
console.log('' + 1 + 0); // 10 - string
console.log('' -1 + 0); // -1 - number, 'cause string doesn't know minus so empty string and others turned into numbers
console.log('3' * '8');// string doesnt know multiplication so strings are turned into numbers
console.log(4 + 10 + 'px'); // sequence is important, "14px"
console.log('px' + 5 + 10); // "px" + "5" + "10" = px510, 1. 5 turned into string and unified with px, and 10 - string = px510
console.log('42' - 40); // 42 str -> 42 numb === 42 - 40 = 2
// If we have actual string not only number, we get NaN, for ex:
console.log("42px" - 2); //NaN

