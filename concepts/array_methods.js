// // 'use strict';

// // // filter

// // const names = [
// //     'Ivan',
// //     'Ann',
// //     'Ksenia',
// //     'VolonDemort'
// // ];

// // const shortNames = names.filter(name => name.length < 5);

// // console.log(shortNames);

// // map

// // const answers = ['IvAn', 'AbDulaZiZ', 'Hi'];

// // const result = answers.map(answer => answer.toLowerCase())
// // console.log(result);

// // every / some

// // const some = [4, 'we', 'dasd'];

// // // console.log(some.some(item => typeof item === 'number'));

// // console.log(some.every(item => typeof item === 'number'));

// // reduce

// // const arr = [4, 5, 1, 2, 6];

// // const res = arr.reduce((sum, current) => sum + current);

// // console.log(res);

// const arr = ['applle', 'pineapple', 'plum', 'something'];

// const res = arr.reduce((sum, current) => sum + ', ' + current, "fruits: ");

// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);