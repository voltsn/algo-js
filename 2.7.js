// Prompt the user for a number.
let n = parseInt(window.prompt("Enter a number"));

// Prompt the user for a number n times.
// Calculate the sum of all the numbers.
let sum = 0;
for (let i = 0; i < n; i++) {
    let value = parseInt(window.prompt("Enter another number"));
    sum += value;
}

// Display the sum.
alert("The sum of the numbers is " + sum);