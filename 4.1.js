// Consumes two arguments: 
// The length and width of a rectangle
// Returns the surface area of the rectangle.
function calcSurface(length, width) {
    return length * width;
}

function main(){
    let rectLength = parseInt(window.prompt("Enter the length of the rectangle"));
    let rectWidth = parseInt(window.prompt("Enter the width of the rectangle"));
    
    let surface = calcSurface(rectLength, rectWidth);
    alert("The surface of the rectangle is " + surface);
}

main();