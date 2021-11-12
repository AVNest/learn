'use strict';

class Rectengle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColorRectengleWithText extends Rectengle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColorRectengleWithText(20, 15, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

const square = new Rectengle(10, 10);
const long = new Rectengle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

