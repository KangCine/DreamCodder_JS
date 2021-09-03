// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    brithDate : new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
// 함수는 오브젝트에 있는 데이터가 아니라서 JSON에 포함되지 않음

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'cine' : value;
});
console.log(json);

console.log('----------');

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'brithDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // error

console.log(rabbit.brithDate.getDate());
console.log(obj.brithDate); // string이 오브젝트에 할당된거라 string임
console.log(obj.brithDate.getDate());