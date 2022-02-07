// // Falsy values
// // ''
// // 0
// // null
// // undefined
// // NaN
// // false
// console.log(Boolean('')); 
// console.log(Boolean('Hello')); 
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// Truthy values
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function() {}));

// String and Number
console.log(1 + '2'); // srting 12
console.log('' + 1 + 0); // 10 string 
console.log('' - 1 + 0); // -1 Number
console.log('3' * '8'); // Number 24
console.log(4 + 10 + 'px'); // 14px String
console.log('42' - 40); // 2 number
console.log('42px' - 2); // NaN, when we are casting '42px' string to number we get NaN
console.log(null + 2); // 0 + 2 === 2
console.log(undefined + 2) // NaN we cannot cast undefined to Number

// == VS ===

// (==)  equals compare with TYPE CASTING
// (===) triple equals compares without type casting

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true, type casted to same type 'cause of two equals
console.log(undefined === null); // false, not type casted to same type 'cause of triple equals
console.log('0' == false); // true, '0' type casted to 0, false type casted to 0, so they are the same
console.log('0' == 0) // true

// -=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=
