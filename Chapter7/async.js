// 비동기 특징: 종료되는 시점을 임의로 지정할 수 없다

console.log(1);
console.log(2);
console.log(3);

/* let sum = 0;

for (let i = 0; i < 100000000; i++) {
    sum += i;
}
console.log(sum); */

// function asyncWorker(callback) {
//     setTimeout(function() {
//         callback();
//     }, 3000);
// }


// function sayHello() {
//     console.log('Hello!');
// }
// // setTimeout(sayHello, 5000);
// let intervalHandle = setInterval(sayHello, 1000);
// setTimeout(function() {
//     console.log("Stoping...")
//     clearInterval(intervalHandle);
// }, 7000);

let asyncWorker = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 3000);
});

asyncWorker.then(function () {
    console.log("Async work complete!");
    console.log(6);
});

console.log(4);
console.log(5);

// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) => {
//     return a + b;
// }

// let add = (a, b) => a + b;

// add(function () {
    
// });