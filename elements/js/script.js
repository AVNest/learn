

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '90%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('hey yo');

div.classList.add('black');

document.body.append(div);
// wrapper.appendChild(div); // old

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[2]); // old

// circles[0].remove();
// wrapper.removeChild(hearts[1]); // old

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]); // old

div.innerHTML = "<h1>hello world!</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');