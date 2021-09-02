// 1. Use Strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

console.log('---------');

// 2. Variable, rw(read / write)
// let (added in ES 6)

let name = 'cine';
console.log(name);
name = 'hello';
console.log(name);

let globalName = 'global name';
{
    let name = 'cine';
    console.log(name);
    name = 'cine';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(don't ever use this!)
// var hoisting
age = 4;
var age;
console.log(age);

console.log('---------');

// 3. Contants, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;
console.log(daysInWeek);
console.log(maxNumber);

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// error
// daysInWeek = 10;
// maxNumber = 11;
// console.log(daysInWeek);
// console.log(maxNumber);

console.log('---------');

// 4. Variable types
// primitive, single item: Number, string, boolean, null, undefined, Symbol
// object, box container
// function, first-class function
const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

console.log('---------');

// number - speical numeric values: infinity, -infinity, NaN(Not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt ( fairly new, don't use it yet)
// 지원하지 않은 브라우저도 있음
const bigInt01 = 1234567890123456789012345678901234567890; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt01}, type: ${typeof bigInt01}`);
Number.MAX_SAFE_INTEGER;

const bigInt02 = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt02}, type: ${typeof bigInt02}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
// let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol01 = Symbol('id');
const symbol02 = Symbol('id');
console.log(symbol01);
console.log(symbol01 === symbol02);

const gSymbol01 = Symbol.for('id');
const gSymbol02 = Symbol.for('id');
console.log(gSymbol01);
console.log(gSymbol01 === gSymbol02); // true
console.log(`value: ${symbol01.description}, type: ${typeof symbol01.description}`);

// object, real-life object, data structure
const cine = {name: 'cine', age: 28};
cine.age = 29;

console.log('---------');

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));