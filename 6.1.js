class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.surface = Math.PI * Math.pow(this.radius, 2);
    }

    get getSurface() {
        return this.surface;
    }

    move(xOffest, yOffeset) {
        this.xPos += xOffest;
        this.yPos += yOffeset;
    }
}

/*================= TESTING ================================================*/
let circle1 = new Circle(5, 8, 2);
let circle2 = new Circle(0, 5, 6);
let circle3 = new Circle(12, 0, 8);

console.log(`surface of circle 1: ${circle1.surface}`);
console.log(`surface of circle 2: ${circle2.surface}`);
console.log(`surface of circle 3: ${circle3.surface}`);

console.log(`Initial position of circle 1: ${circle1.xPos}, ${circle1.yPos}`);
console.log(`Initial position of circle 1: ${circle2.xPos}, ${circle2.yPos}`);
console.log(`Initial position of circle 1: ${circle3.xPos}, ${circle3.yPos}`);

circle1.move(2, 2);
circle2.move(1, 2);
circle3.move(4, 6);

console.log(`New position of circle 1: ${circle1.xPos}, ${circle1.yPos}`);
console.log(`New position of circle 1: ${circle2.xPos}, ${circle2.yPos}`);
console.log(`New position of circle 1: ${circle3.xPos}, ${circle3.yPos}`);
