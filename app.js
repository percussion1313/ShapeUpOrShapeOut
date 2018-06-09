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
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
        this.div.style.width = `${width}px`
        this.div.style.height = `${height}px`
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
    constructor(width,height,) {
        super('rectangle', width, height, null, 'green');


    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength);

        this.sideLength = sideLength;

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



let randomVal = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}


addRectangle = () => {
    let width = widInput.value;
    let height = heightInput.value;
    new Rectangle(width,height)
}

recButton.addEventListener('click', addRectangle);
