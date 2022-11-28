const manhattan = (streetA, avenueA, streetB, avenueB) => {
    let xDistance = Math.abs(streetA - streetB);
    let yDistance = Math.abs(avenueA - avenueB);
    return xDistance + yDistance;
}