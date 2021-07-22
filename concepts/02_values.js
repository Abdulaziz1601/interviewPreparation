// let a = 42;
// let b = a;
// b++;
// console.log('a', a);
// console.log('b', b);

let a = [1, 2, 3];
let b = a;
// to avoid assigning reference ->
// let b = a.concat(); // concat return copy of an arr
b.push(4);

let c = [1, 2, 3];
console.log('a', a); // [ 1, 2, 3, 4 ]
console.log('b', b); // [ 1, 2, 3, 4 ]

// reference of a is assigned to b, so when b is changed then b is changed too

console.log(a === b); // If we they're assigned as reference it'll be true
console.log(a === c); // false - a and c are different objs casting gives us different values