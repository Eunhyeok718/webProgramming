// 로또 번호 생성 함수lottoNums = [];

function generateLottoNumbers() {while (lottoNums.length < 6) {

    const numbers = [];    let randomNum = getRandomInt(45);

    while (numbers.length < 6) {    if (!lottoNums.includes(randomNum)) {

        const num = Math.floor(Math.random() * 45) + 1;        lottoNums.push(randomNum);

        if (!numbers.includes(num)) {    }

            numbers.push(num);}

        }console.log('로또 번호: ', lottoNums);
    }
    return numbers.sort((a, b) => a - b);
}

console.log('로또 번호:', generateLottoNumbers());
