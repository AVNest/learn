'use strict';

// new RegExp('pattern', 'flags');
// // /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/ig;
// // console.log(reg.test(ans));
// console.log(ans.match(reg));
// flags i g m 
// classes \d - num \w - words \s - spaces

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

const srt = "My name is R2D2";
console.log(srt.match(/\w\d\w\d/i));