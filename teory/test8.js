// to string

// 1
console.log(typeof(String(null)));

// 2 
console.log(typeof(5 + ''));

const num = 5;

console.log("http://vc.com/catalog/" + num);

const fontSize = 26 + 'px';

// to number
// 1
console.log(typeof(Number(null)));
console.log(typeof(Number('5')));

//2 
console.log(typeof(+'5'));

// 3 
console.log(typeof(parseInt("15px", 10)));
let answ = +prompt("hello", "");

// to boolean
// 0, '', null, undefined, NaN

let switcher = null;
