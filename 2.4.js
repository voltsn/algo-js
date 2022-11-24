// For numbers between 1 and 100
// display the quotient of every even number divided by 2.
// And for every odd number display the product of their
// multiplication by 3.
let lowerBound = 1;
let upperBound = 100;

for (let i = lowerBound; i <= upperBound; i++) {
    if (i % 2 == 0){
        console.log(i / 2);
    }else {
        console.log(i * 3);
    }
}