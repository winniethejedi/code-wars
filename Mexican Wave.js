// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// My first solution

function wave(string){
    const answer = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' ) {
            
        }
        else if (i === 0) {
            answer.push(string[i].toUpperCase() + string.slice(i + 1).toLowerCase());
        }
        else if (i === string.length - 1) {
            answer.push(string.slice(0, i).toLowerCase() + string[i].toUpperCase());
        }
        else {
            answer.push(string.slice(0, i).toLowerCase() + string[i].toUpperCase() + string.slice(i + 1).toLowerCase())
        }
    }
    console.log(answer);
    return answer;
}

// Best answer on site
function wave2(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}