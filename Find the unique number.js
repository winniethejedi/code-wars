// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//My first solution

function findUniq(arr) {
    const numbers = [];
    const sortedArr = arr.sort((a, b) => a-b);
    numbers.push(sortedArr[0], sortedArr[1], sortedArr[sortedArr.length - 2], sortedArr[sortedArr.length - 1]);
    if (numbers[0] === numbers[1] && numbers[0] === numbers[2]) {
        return numbers[3];
    }
    else {
        return numbers[0];
    }
};

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([ 0, 0, -2, 0, 0 ]));

// best answer on site

function findUniq2(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }