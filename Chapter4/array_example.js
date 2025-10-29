let handsomePeople = ['차은우', '이민호', '김우빈', '박보검', '송중기'];
console.log(handsomePeople[0]);
console.log(handsomePeople[1]);

for (let i = 0; i < handsomePeople.length; i++) {
    console.log(handsomePeople[i]);
}

handsomePeople.push('박민수');
console.log(handsomePeople[handsomePeople.length - 1]);
handsomePeople.pop();
console.log(handsomePeople[handsomePeople.length - 1]);

// length = handsomePeople.length;
// for (let i = 0; i < length; i++) {
//     handsomePeople.pop();
// }
// console.log(handsomePeople);

handsomePeople.sort();
console.log(handsomePeople);

let numbers = [11, 6, 21, 3, 18, 5, 30, 27, 25]
function compare(a, b) {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}
numbers.sort(compare);
console.log(numbers);