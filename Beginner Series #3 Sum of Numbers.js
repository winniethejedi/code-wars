// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// My first solution

function getSum(a, b) {
    if (a > b) {
        let sum = 0;
        for (let i = b; i === a; i++) {
            sum += i;
        }
        console.log(sum);
        return sum;
    }
    else if (a < b) {
        let sum = 0;
        for (let i = a; i === b; i++) {
            sum += i;
        }
        console.log(sum);
        return sum;
    }
    else {
        return a
    }
}

console.log(getSum((1, 0)));
console.log(getSum((1, 2)));
console.log(getSum((0, 1)));
console.log(getSum((1, 1)));
console.log(getSum((-1, 0)));
console.log(getSum((-1, 2)));
console.log(getSum());

