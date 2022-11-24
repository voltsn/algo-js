let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];

let sizeOfArray = arr2.length

let sum = 0;
for (let i = 0; i < sizeOfArray; i++) {
    sum += arr2[i];
}
let average = sum / sizeOfArray;
console.log(average);