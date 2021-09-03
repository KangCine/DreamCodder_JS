'use strict';

// Promise is a JavaScript onject for asynchronous operatiom.
// State: pending -> fulfulled or rejected
// producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('cine');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then(성공했을떄), catch(실패했을때), finally(성공하던 실패하던)
promise.
    then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {console.log('finally');
});

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => meal`), 1000);
    });

// getHen()
//.then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
getHen() //
.then(getEgg)
.catch(error => {
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);