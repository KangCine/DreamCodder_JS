'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
for(let fruit in fruits){
    console.log(fruits[fruit]);
}
for(let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);


// note!! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push('딸기', '복숭아');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '포도', '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '망고'];
// concat() -> 배열을 합해줌 
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// find the index
console.log(fruits);

// indexOf: find the index
console.log(fruits.indexOf('딸기'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('낑깡'));

// includes: 인자가 있는지 없는지 반환
console.log(fruits.includes('딸기'));
console.log(fruits.includes('낑깡'));

//lastIndexOf: 끝에있는 인자 찾기
fruits.push('딸기');
console.log(fruits);
console.log(fruits.indexOf('딸기'));
console.log(fruits.lastIndexOf('딸기'));
