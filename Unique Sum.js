// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null
// Good Luck!

//My first answer

const arrayToTest = [ -1, -1, 5, 2, -7] 

function uniqueSum(lst) {
    if (lst.length === 0) {
        return null;
    }
    else {
        const arrayToCheck = []
        let sum = 0;
        for (let i = 0; i < lst.length; i++) {
            if (!arrayToCheck.includes(lst[i])) {
                arrayToCheck.push(lst[i]);
                sum += lst[i];
            }
        }
        return sum;
    }
}

console.log(uniqueSum(arrayToTest));
console.log(uniqueSum([]));

// Best answer on site

function uniqueSum(lst){
    return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
  }