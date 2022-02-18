// // // const p = {
// // //     surname: 'Stark',
// // //     knows: function(what, name) {
// // //         console.log(`you ${what} know ${name}  ${this.surname}`);
// // //     },
// // // };

// // // const john  = {surname: 'Snow'};

// // // p.knows('All', 'BRen');

// // // p.knows.call(john, 'nothing', 'John');
// // // p.knows.apply(john, ['nothing', 'John']); 
// // // p.knows.bind(john, 'nothing', 'John')(); 

// // // -=-=-=-=--==-=-=--=-=-=-=-=-=-=-=

// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;

// //     console.log(this);
// // }

// // const elena = new Person('Elena', 20);

// // Explicit Binding
// function logThis() {
//     console.log(this);
// }
// const obj = {a: 42};

// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();
    
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-
// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this);
//     }
// };


