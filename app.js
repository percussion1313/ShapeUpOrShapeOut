const min = 0;
const max = 600;

//Calling the side panel, side panel elements, and container
let container = document.getElementById('div-container');
let sideName = document.getElementById('name');
let sideWidth = document.getElementById('wid');
let sideHeight = document.getElementById('height');
let sideRad = document.getElementById('rad');
let sideArea = document.getElementById('area');
let sidePerim = document.getElementById('perim');
let panel = document.getElementById('sidepanel');

//Calling the buttons
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


let randomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

class Shape {
    constructor(shapeName, width, height, radius, color) {

        this.shapeName = shapeName;
        this.width = width;
        this.height = height;
        this.radius = radius;

        //New shape generator
        this.newShape = document.createElement('div');
        this.newShape.classList.add('newShape');
        this.newShape.style.backgroundColor = color;
        container.appendChild(this.newShape);
        
        

    }
    //Position on the screen as well as height and width of object
    position() {
        let xVal = randomVal(min,max);
        let yVal = randomVal(min,max);
        this.newShape.style.left = `${xVal}px`;
        this.newShape.style.top = `${yVal}px`;
        this.newShape.style.width = `${width}px`
        this.newShape.style.height = `${height}px`
    }
    
    //
    describe() {
        sideName.innerHTML = this.shapeName;
        sideWidth.innerHTML = this.width;
        sideHeight.innerHTML = this.height;
        sideRad.innerHTML = this.radius;
        sideArea.innerHTML = this.area;
        sidePerim.innerHTML = this.perimeter;
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super('rectangle', width, height, null, 'green');

    
        this.position();

    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);

        this.shapeName = 'square'
        this.sideLength = sideLength;
        this.radius = null
        this.style.backgroundColor = 'red'

    }
}

class Circle extends Shape {
    constructor(radius) {
        super('circle',width, height, radius, 'purple');
        this.area = Math.PI * radius * radius;
        this.perimeter = 2*Math.PI*radius;
    }

    positionCircle() {
        
    }
}

class Triangle extends Shape {
    constructor(height) {
        super('triangle', width, height, null, 'yellow');

        this.area = 0.5 * base * height

    }

    positionTriangle() {
        
    }
}

addRectangle = () => {
    let width = widInput.value;
    let height = heightInput.value;
    let newRectangle = new Rectangle(width,height)
}

recButton.addEventListener('click', addRectangle);
