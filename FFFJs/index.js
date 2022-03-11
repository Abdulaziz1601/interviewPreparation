let l = (p) => console.log(p);
// let triple =  function (x) {
//     return x*3;
// };

// // let waffle = triple;

// // l(waffle(30));

// // Higher Order Function:
// // Filter

// const num = [1, 1.1,  2, 2.2, 3, 5.5];

// let isNum = num => !num.toString().includes('.');
// let isDecimalNum = num => num.toString().includes('.');

// const realNums = num.filter(isNum);

// const decimalNums = num.filter(isDecimalNum);

// l(realNums);
// l(decimalNums);

// MAP
// const nums = [1, 2, 3, 4, 5, 5];

// l(nums.map(n => n*3));

const orders = [
    {a: 250},
    {a: 400},
    {a: 300},
    {a: 200},
    {a: 150}
];

l(orders.map(item => item.a).reduce((p, c) => p+c));
