// Write a function to shuffle an array.

// Ex.:

// Input: [1,2,3,4]
// Output: [3,1,4,2]
// Assume input is array.

// Hint: Math.random()

// http://devdocs.io/javascript/global_objects/math/random

// my first solution

const testArray = [1, 2, 3, 4];


function shuffle(arr) {
    const results = [];

    for (let i = 0; i < arr.length; i ++) {
        if (i < arr.length - 1) {
            results[i + 1] = arr[i];
        }
        else {
            results[0] = arr[i];
        }
    }

    return results;
}

console.log(shuffle(testArray));

// best answer on site

