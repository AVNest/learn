'use strict';

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            console.log(request.response);
        }
    });
});