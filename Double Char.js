// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// My first solution

function doubleChar(str) {
    let result = ''
    for (let i = 0; i < str.length; i ++) {
        result += str[i] + str[i];
    }
    return result
  }

console.log(doubleChar('string'));

// best answer on site

const doubleChar2 = (str) => str.split("").map(c => c + c).join("");