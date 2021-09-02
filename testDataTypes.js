let length = 16;
typeof length; //  문제1 -> number
console.log(typeof(length));

let lastName = "Johnson";
typeof lastName; // 문제2 -> string
console.log(typeof(lastName));

let car = undefined; 
typeof car; // 문제3 -> undefined
console.log(typeof(car));

typeof 0; // 문제4 -> number
typeof 314; // 문제5 -> number
typeof 3.14; // 문제6 -> number
console.log(typeof(0));
console.log(typeof(314));
console.log(typeof(3.14));

const sample = { 
  firstName: "John",
  lastName: "Doe"
};
typeof sample; // 문제7 -> object
console.log(typeof(sample));

const fruits= ['apple', 'banana', 'pear']; // 문제8 -> array
console.log(typeof(fruits));

let x = 5;
let y = 5;
(x === y); // 문제9 -> true
console.log(x===y);

let a = 0;
let b = 1;
let c = undefined;
let d = 'abc';
let e = null;
Boolean(a); // 문제10 -> false
Boolean(b); // 문제11 -> true
Boolean(c); // 문제12 -> false
Boolean(d); // 문제13 -> ture
Boolean(e); // 문제14 -> false
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));