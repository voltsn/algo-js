const spaceAge = (age, planet) => {
    let factor;
    switch(planet) {
        case "Mercury":
            factor = 0.2408467;
            break;
        case "Venus":
            factor = 0.61519726;
            break;
        case "Earth":
            factor = 1.0;
            break;
        case "Mars":
            factor = 1.8808158;
            break;
        case "Jupiter":
            factor = 11.862615;
            break;
        default:
            factor = undefined;
            break;
    }

    if (!factor) {
        return undefined;
    }

    return age / (31557600 * factor);
}