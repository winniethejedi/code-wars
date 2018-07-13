// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// , which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.

// Note
// min < max
// step > 0

// My first solution

function generateRange(min, max, step){
    const array = [];
    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));

// Best solution on site

function generateRange2(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
  }