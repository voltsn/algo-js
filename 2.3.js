// Display even numbers between 1 and 100
// using a while and a for loop.
let lowerBound = 1;
let upperBound = 100;

// while loop edition.
let counter = lowerBound;
while (counter <= upperBound){
    if (counter % 2 === 0){
        console.log(counter);
    }

    counter++;
}

// for loop edition.
for (let i = lowerBound; i <= upperBound; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}