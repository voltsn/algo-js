let numbers = [-23, 4, 1, 2, 99, 3, 0, 28, 12, -1];
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min){
        min = numbers[i];
    }

    if (numbers[i] > max){
        max = numbers[i];
    }
}

console.log(min);
console.log(max);