console.log('Hello, World!')
let a = 10;
let b = 20;
console.log(a + b);

if (a < b) {
    console.log("a는 b보다 작습니다.");
} else if (a === b) {
    console.log("a는 b와 같습니다.");
} else {
    console.log("a는 b보다 큽니다.");
}

function add(x, y) {
    // let sum = x + y;
    // return sum;
    return x + y;
}

// let result = add(123456789, 987654321);
// console.log(result);
console.log(add(123456789, 987654321));

let body = document.querySelector('body');
body.style.margin = '8px';
let header = document.querySelector('#header');
header.style.backgroundColor = 'lightblue';
let nav = document.querySelector('.nav');
nav.style.backgroundColor = 'lightgreen';