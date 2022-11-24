// Returns a random numnber between 1 and 10.
// Makes use of the Math module.
let rand10 = () => {
    let max = 10;
    let min = 1;

    // max and min are inclusive.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = rand10();
alert(randomNumber);