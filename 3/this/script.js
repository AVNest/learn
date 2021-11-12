'use strict';

// 1 - обычная функция this = window, но если стоит use strict То this - undefinde

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// 2 - контекст у методов объекта это сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 3 - this в конструкторах и класах - новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let ivan = new User('Ivsn', 30);

// 4 - ручная привязка this: call, apply, bind

// function sayName(surename) {
//     console.log(this);
//     console.log(this.name + surename);
// }

// const user = {
//     name: 'Ivan'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, ['Smith']);

// function count(sum) {
//     return this*sum;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(12));

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
//     console.log(this);
// });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};
obj.sayNumber();

// если стрелочная функчия принимает один аргумент, можно обойтись без круглых сокбок

const double = a => a * 2;