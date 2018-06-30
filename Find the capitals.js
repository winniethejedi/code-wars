// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My first solution

function findCapitals(word) {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].match(/[a-z]/i)) {
            if (word[i] === word[i].toUpperCase()) {
                indexes.push(i);
            }
        }
    }
    return indexes;
}

console.log(findCapitals('GilRoY'));
console.log(findCapitals(''));
console.log(findCapitals('no caps'));
console.log(findCapitals('ALL CAPS'));

// best answer on site

var capitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
      return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
  };