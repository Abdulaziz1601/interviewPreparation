// // closures - when functions can access vars on the above scope

// function sayHelloTo(name) {
//     const message  = 'Hello' + name;
//     return function() { // this anonymous function have access to above message var
//         console.log(messsage);
//     }
// }

// const helloToLee = sayHelloTo('Lee'); // this returns function that says hello to lee
// helloToLee();

function createframeWorkManaager() {
    const fw = ['Angular', 'react'];
    return {
        print: function() {
           console.log(fw.join(' ')); 
        },
        add: function(framwork) {
            fw.push(framwork);
        }
    }
}
const manager = createframeWorkManaager();
console.log(manager);

// console.log(fw);

manager.add("VUeJS");
manager.print();

// we made fw private

// setTimout 

const fib = [1, 2, 3, 5, 8, 13];

for (let i = 0; i < fib.length; i++) {
    setTimeout(function() {
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500)
    
}



