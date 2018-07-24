// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// My first solution

function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    
    str.split('').forEach((letter, i) => {
        if (letter === 'a' || letter === 'e' || letter ==='i' || letter === 'o' || letter === 'u') {
            vowelsCount ++
        }
    })

    return vowelsCount;
};

console.log(getCount("abracadabra"));

// Best solution on site

function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
};
