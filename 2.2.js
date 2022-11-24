let min = window.prompt("Enter min value");
let max = window.prompt("Enter max value");
if (min > max) {
    alert("The min value can't be greater than the max value... Try again.");
    throw new Error("min greater than max");
}

let current = window.prompt("Enter current value");
if ((current >= min) && (current <= max)) {
    console.log(`${current} sits btween ${min} and ${max}`);
}
