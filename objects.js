// // // // let user = {
// // // //     name: "john",
// // // //     surname: "Doe",
// // // //     age: 21
// // // // };

// // // // console.log(user);

// // // // delete user.age;

// // // // console.log(user);

// // // let schedule = {};

// // // console.log( isEmpty(schedule) ); // true

// // // schedule["8:30"] = "get up";

// // // console.log( isEmpty(schedule) ); // false
// // // console.log(schedule);
// // // function isEmpty(obj) {
// // //     for (const key in obj) {
// // //         if(key in obj)
// // //             return true
// // //     }
// // //     return false;
// // // }

// // let salaries = {
// //     John: 100,
// //     Ann: 160,
// //     Pete: 130
// // }
// // const obj = Object.assign({}, salaries);
// // console.log(obj);
// // let sum = 0;
// // if(!(Object.keys(obj).length === 0)){
// //     for(let key in obj) {
// //         sum += obj[key];
// //     }
// // }

// // console.log(sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] === 'number')
//             obj[key] = obj[key] * 2
//     }
//     return obj;
// }

// console.log(menu);

// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });
// console.log(user);

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

console.log(clone.sizes);