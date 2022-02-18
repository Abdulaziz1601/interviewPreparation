// // // // // closures - when functions can access vars on the above scope

// // // function sayHelloTo(name) {
// // //     const message = 'Hello' + name;

// // //     return function() {
// // //         console.log(message);
// // //     }
// // // }

// // // const HelloToAbdulaziz = sayHelloTo(' Ali');
// // // HelloToAbdulaziz();

// // function createFrameworkManager() {
// //     const fw = ['Angular', 'Vue'];

// //     return {
// //         print: function() {
// //             console.log(fw);
// //         },
// //         add: function(frameworks) {
// //             fw.push(frameworks);
// //         },
// //     }
// // }

// // const manager  = createFrameworkManager();
// // manager.print();
// // manager.add('Vue JS');
// // manager.print();

// // setTimout
// const fib = [1, 2, 3, 5, 8, 13];

// for(var i = 0; i < fib.length; i++) {
//     setTimeout(() => {
//         console.log(`fib[${i}]: ${fib[i]}`);
//     }, 1500)
// };