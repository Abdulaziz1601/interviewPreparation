// // Let
// let a = 'Varable a';
// let b = 'Variable b';

// // Block Scope
// {
//     a = 'New Variable A';
//     let b = 'Local Variable B'; // can be accessed only in B - block scope 
//     console.log('Scope A', a);
//     console.log('Scope B', b);
//     console.log('Scope C', c);
//     let c = "Something";
// }

// COnst 
// THey are not actual constants
const array = [
    'JS',
    'is',
    'awesome'
];

array.push('!'); // So here we can change the array
array[0] = 'C++';
console.log(array);
// we can see that we can change any element of an array;

// but we cannot assign array to smth
// array = ''; // we cannot reassign it 'cause it is const

const obj = {
}

// We can change and add properties of objs
obj.name = 'Abdulaziz';
obj.age = 19;

console.log(obj);

obj.age = 20;

console.log(obj);
// We can change'em also 

