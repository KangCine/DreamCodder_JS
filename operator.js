// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log(`string literals:

''''
 1 + 2 = ${1 + 2}`);

 console.log("cine's book");

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x += y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Lofical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 트루가 나오면 멈춤( 왜냐 뒤에가 뭐던 트루이기 떄문에)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), 처음으로 false가 나오면 false가 리턴됨
console.log(`or: ${value1 && value2 && check()}`);

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log(':smile:');
    }
    return true;
}

// ! (not)
console.log(!true);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const cine1 = { name: 'cine' };
const cine2 = { name: 'cine' };
const cine3 = cine1;
console.log(cine1 == cine2);
console.log(cine1 === cine2);
console.log(cine1 === cine3);

// equality - puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators: if
// if, else if, else
const name = 'cine';
if(name === 'cine'){
    console.log('Welcome, Cine!');
}else if(name === 'coder'){
    console.log('You are amazing coder!');
}else{
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'cine' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'FIrefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, bpdy cpde os execited first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable decaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }else{
        continue;
    }
    
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 10; i++){
    if(i == 8){
        break;
    }
    console.log(i);
}