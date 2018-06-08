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
    constructor(shapeName, shapeName, perimeter, width, height, area, radius) {
        this.div = containerDiv;
        this.shapeName = shapeName;
        this.perimeter = perimeter;
        this.width = width;
        this.height = height;
        this.area = area;
        this.radius = radius;

    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(shapeName, shapeName, perimeter, width, height, area, radius);
        this.radius = null;

    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(shapeName, shapeName, perimeter, width, height, area, radius);

        this.sideLength = sideLength;

    }
}

class Circle extends Shape {
    constructor(radius) {
        super(shapeName, shapeName, perimeter, width, height, area, radius);

    }
}

class Triangle extends Shape {
    constructor(triangleArea) {
        super(shapeName, shapeName, perimeter, width, height, area, radius);

        this.triangleArea = triangleArea;
        let triangleArea = 0.5 * base * height;
        this.radius = null;
        this.width = base;
    }
}

//For placing shapes in random areas of the container div
let randomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}