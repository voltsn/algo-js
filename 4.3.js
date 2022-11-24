// Returns a random numnber between 1 and 10.
// Makes use of the Math module.
let rand10 = () => {
    let max = 10;
    let min = 1;

    // max and min are inclusive.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Consumes an integer n.
// Returns an array of random numbers between 1 and 10, of size n.
let multiRand = (n) => {
    let randomNumbers = [];
    for (let i = 0; i < n; i++){
        randomNumbers.push(rand10());
    }
    return randomNumbers;
}

let main = () => {
    // Prompt user for the size of the array.
    let sizeOfArray = parseInt(window.prompt("Size of array"));
    let randomNumbers = multiRand(sizeOfArray);

    alert(randomNumbers);
}

main();