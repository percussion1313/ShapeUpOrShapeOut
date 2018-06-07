class Shape {
    constructor(shapeName, height, perimeter, area) {
        document.getElementById('container');
        this.div = document.createElement('div');
        ('container').appendChild(this.div);
        this.shapeName = shapeName;
        this.height = height;
        this.perimeter = perimeter;
        this.area = area;
    }
}

class Rectangle extends Shape {
    constructor(width) {
        super(shapeName, height, perimeter, area,  width)

        this.width = width;

    }
}

class Square extends Shape {
    constructor(area) {
        super(shapeName, height, perimeter, area, sideLength)

        this.sideLength = sideLength;
        
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(shapeName, height, perimeter, area, radius)

        this.radius = radius;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(shapeName, height, perimeter, area)


    }
}

let randomVal = () => {

}