let min = 0;
let max = 600;
//Calling the side panel, side panel elements, and container
let container = document.getElementById('container');
let sideName = document.getElementById('name');
let sideWidth = document.getElementById('wid');
let sideHeight = document.getElementById('height');
let sideRad = document.getElementById('rad');
let sideArea = document.getElementById('area');
let sidePerim = document.getElementById('perim');
let panel = document.getElementById('sidepanel');

//Calling the buttons by ID
let recButton = document.getElementById('rectangle-button');
let sqButton = document.getElementById('square-button');
let circleButton = document.getElementById('circle-button');
let triButton = document.getElementById('triangle-button');

//Calling the inputs
let widInput = document.getElementById('wid-input');
let heightInput = document.getElementById('height-input');
let sideInput = document.getElementById('side-input');
let rdInput = document.getElementById('radius-input');
let triInput = document.getElementById('tri-height-input');



//

class Shape {
    constructor(shapeName, width, height, radius, color) {

        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
        this.radius = radius;

        this.newShape = document.createElement('div');
        this.newShape.classList.add('newShape')
        this.newShape.style.backgroundColor = color
    }
}

class Rectangle extends Shape {
    constructor(width,height) {
        super(width, height);
        
        this.radius = null;

    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);

        this.side = side;

    }
}

class Circle extends Shape {
    constructor(radius) {
        super(width, height, radius);
        this.area = Math.PI * radius * radius;
        this.perimeter = 2*Math.PI*radius;

    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height);

        this.area = 0.5 * base * height
        this.radius = null;
        this.width = base;
    }
}

//For placing shapes in random areas of the container div
let randomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}