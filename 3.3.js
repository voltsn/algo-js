let arr = [0, 1, 2, 3];
let copy1 = [];

for (let i = 0; i < arr.length; i++){
    copy1.push(arr[i]);
}

let copy2 = arr.slice();

console.log(copy1);
console.log(copy2);