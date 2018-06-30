// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//My first answer
function spinWords(string){
    const splitStringArray = string.split(' ');
    const reversedStringsArray = splitStringArray.map((string, i) => {
      if (string.length >= 5) {
        return string.split('').reverse().join('')
      }
      else return string;
    })
    return reversedStringsArray.join(' ');
  }