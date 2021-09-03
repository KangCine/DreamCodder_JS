'use strict';

// JavaScript is synchronous(자바스크립트는 동기적입니다).
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration(변수나 함수 선언이 변수 제일 위로 올라가는 것)
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}
printWithDelay(() => console.log('anync callback'), 2000);



// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'cine' && password === 'cine') ||
                (id === 'play' && password === 'auto')
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not fount'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'cine'){
                onSuccess({name: 'cine', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    }, 
    (error) =>{
        console.log(error)
    }
);