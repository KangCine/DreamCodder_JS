// 문제 11
// 아래와 같은 데이터를 서버에서 받았다고 가정해봅시다.
// 받은 데이터 (received_data)를 JSON으로 만들어,
// city를 추출해 변수 city_name에 저장해보세요.

const received_data = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
let city_name = JSON.parse(received_data).city;
console.log(city_name);



// 문제 12
// 이미 선언된 first_name과 last_name으로
// (1) JavaScript object를 만들고 (키값은 first_name, last_name으로 해줍시다)
// (2) JSON 으로도 변환해봅시다!

const first_name = "Brock";
const last_name = "PlayAuto";
const my_name = {
    first_name : "Brock",
    last_name : "PlayAuto",
}

const json = JSON.stringify(my_name);
console.log(json);