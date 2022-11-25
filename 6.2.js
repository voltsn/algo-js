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
