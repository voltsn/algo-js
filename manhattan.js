const manhattan = (streetA, avenueA, streetB, avenueB) => {
    let xDistance = Math.abs(streetA - streetB);
    let yDistance = Math.abs(avenueA - avenueB);
    return xDistance + yDistance;
}

console.log(manhattan(1, 1, 2, 2)); // 2
console.log(manhattan(1, 1, 1, 1)); // 0
console.log(manhattan(5, 4, 3, 2)); // 4