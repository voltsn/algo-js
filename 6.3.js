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


let rand = (max, min) => {
    // max and min are inclusive.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randRectangle() {
    let topLeftXPos = rand(500, 0);
    let topLeftYPos = rand(500, 0);
    let width = rand(50, 70);
    let length = rand(25, 35);

    return new Rectangle(topLeftXPos, topLeftYPos, width, length);
}

function main() {
    let rectangles = [];
    for (let i = 0; i < 1000; i++) {
        rectangles.push(randRectangle());
    }

    for (let j = 0; j < 1000; j++){
        for (let k = 0; k < 1000; k++) {
            if (j !== k && rectangles[j].collides(rectangles[k])){
                console.log(`Rectangle ${j} and rectagle ${k} collide.`)
            }
        }
    }
}

main();