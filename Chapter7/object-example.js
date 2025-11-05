let person = {
    name: "여은혁", 
    age: 20, 
    hobbies: ["축구", "기타", "게임"],
    height: 180,
    weight: 100,
    gender: "남자", 
    sayHello: function() {
        console.log('안녕하세요, 저는 $(this.name)입니다.');
    }
}

let dog = {
    name: "뽀뽀",
    age: 3,
    breed: "골든 리트리버",
    bark: function() {
        console.log('멍멍!');
    }
}

let dog2 = {
    name: "빠삐"
}

let dog3 = {...dog} // 전개 연산자
dog3.name = "뽀삐";

let personDog = {...person, ...dog};
personDog.name = "애드워드";

console.log(person.name);
console.log(person.sayHello());
console.log(dog.bark());
console.log(dog3.bark());