class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        
        return (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
                this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
                this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
                this.length + this.topLeftYPos > otherRectangle.topLeftYPos)
    }
}

/*============== Testing ================*/
let rect1 = new Rectangle(10, 20, 30, 15);
let rect2 = new Rectangle(8, 20, 30, 15);

let rect3 = new Rectangle(0, 10, 10, 5);
let rect4 = new Rectangle(10, 20, 10, 5);

console.log(`rect1 and rect2 collide ? ${rect1.collides(rect2)}`);
console.log(`rect3 and rect4 collide ? ${rect3.collides(rect4)}`);

console.log(`rect1 and rect3 collide ? ${rect1.collides(rect3)}`);
console.log(`rect2 and rect3 collide ? ${rect2.collides(rect3)}`);

console.log(`rect1 and rect4 collide ? ${rect1.collides(rect4)}`);
console.log(`rect2 and rect4 collide ? ${rect2.collides(rect4)}`);