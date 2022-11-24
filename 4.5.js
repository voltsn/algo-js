
// Consumes 2 arguments:
//      pointA: an array containing x and y coordinates [x, y].
//      pointB: an array containing x and y coordinates [x, y].
// Returns the distance between those two points.
const caclDisatance = (pointA, pointB) => {
    let xPointsPower = Math.pow((pointA[0] - pointB[0]), 2);
    let yPointsPower = Math.pow(pointA[1] - pointB[1], 2);
    let distance = Math.sqrt(xPointsPower + yPointsPower);
    return distance;
}