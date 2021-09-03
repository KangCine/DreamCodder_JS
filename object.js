// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key : value };

// 1. Literals and properties
const obj1 = {};    // 'objet literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const cine = {name: 'cine', age: 4};
print(cine);

// 중간에 추가할수 있음.
// with JavaScript magic (dynamically typed language)
// can add properties later
cine.hasJob = true;
console.log(cine.hasJob); // 동적인 코딩? 다른 언어에서는 흔한일은 아니지만 유지보수 힘듬,, 가능한 지양하자

// can delete properties later
delete cine.hasJob;
console.log(cine.hasJob);

// 2. Computed properties
console.log(cine.name);
console.log(cine['name']); // key는 string 타입으로 지정해야함!
cine['hasJob'] = true;
console.log(cine.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(cine, 'name');
printValue(cine, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('cine', 28);

console.log(person4);

function makePerson(name, age){
    return{
        //name: name,
        //age: age,
        name,
        age,
    };
}

const person5 = new Person('cine', 28);
console.log(person5);

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in cine);
console.log('age' in cine);
console.log('random' in cine);
console.log(cine.random);

console.log('----------');

// 6. for..in vs for..of
// for(key in obj)
for(key in cine){
    console.log(key);
}

// for(value of interable)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
for(value of array){
    console.log(value);
}


// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'cine', age: '20'};
const user2 = user;

user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

//const user4 = {};
//Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);