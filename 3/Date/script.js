'use strict';

const now = new Date();
    new Date.parse('2021-10-8');

console.log(now.setDate(18));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for(let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`цикл отработал за ${end - start} милисекунд`);