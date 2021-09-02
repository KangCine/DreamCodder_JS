const a = undefined;
const b = 'hello';
const c = null;

const d = a || b; // 문제1 : c에 저장된 값은?
const e = b || a; // 문제2 : d에 저장된 값은?
const f = c || b; // 문제3: f에 저장된 값은?
const g = b || c; // 문제4: g에 저장된 값은?
const h = a ?? b; // 문제5 : h에 저장된 값은?
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// 참고 : || 와 ?? 모두 "null 병합 연산자" 이지만, 조금 다르게 행동합니다.

const i = a && b; // 문제6 : i에 저장된 값은?
const j = a === b; // 문제7: j에 저장된 값은?
console.log(i);
console.log(j);

const k = !f // 문제8: k에 저장된 값은?
console.log(k);



console.log('---------');



function getData(number) {
	if (number > 5) return 'hello';
	
	return null;
}

const received_data = getData(3);

const result = received_data ?  'Received Data' : 'Did not receive data';
//문제9: 무슨 값이 저장되었을까요?
//Did not receive data
console.log(result);


console.log('---------');


// 문제10
// for loop을 이용해 0부터 9까지 더하는 함수를 완성하세용.
let sum = 0;
for(let i = 0; i < 10; i++){
    sum += i;
}
console.log(sum);


console.log('---------');


// 문제11
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
// for ... in을 이용해, text 변수에 "John Doe 25 " 가 저장되게 코드를 짜보세요
for(let aaa in person){
    //text += person[aaa] + ' ';
    text += `${person[aaa]} `;
}
console.log(text);

// 문제12
const person02 = ["John", "Doe", 25];

text = ""
// for ... of를 이용해 text 변수에 "John Doe 25 "가 저장되게 코드를 짜보세요
for(let bbb of person02){
    text += bbb + ' ';
}
console.log(text);


// 문제 13
// 다음 함수를 Arrow Function의 형태로 다시 써보세요

function doCalculation01 (number1, number2) {
	const multiplication = number1 * number2;
	const addition = number1 + number2;

	return multiplication + addition;
}

console.log(doCalculation01(1, 2));

const doCalculation02 = (number1, number2) => {
    const multiplication = number1 * number2;
    const addition = number1 + number2;

    return multiplication + addition;
}

console.log(doCalculation02(1, 2));


// 문제 14
// 다음 함수를 Arrow Function의 형태로 다시 써보세용. 한 줄로!!

function doCalc01 (number1, number2) {
	return number1 * number2  + number1 + number2;
}

console.log(doCalc01(3, 4));

const doCalc02 = (number1, number2) => {return number1 * number2 + number1 + number2;}

console.log(doCalc02(3, 4));



// 문제 15
// 다음 함수를 Arrow Function의 형태로 다시 써보세요
function  returnFunction (number1) {
	return function addNumbers(number2) {
		return number1 + number2;
	}
}

const returnFunction02 = (number1) => {
    return (number2) => number1 + number2;
}

const returnFunction02 = (number1) => (number2) => number1 + number2;

console.log(returnFunction(1));
console.log(returnFunction(1)(2));