// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

// My first solution

function titleCase(title, minorWords) {
  const titleArray = title.split(' ');
  let officialMinorWordsArray = [];
  if (minorWords) {
    const minorWordsArray = minorWords.split(' ');
    const minorWordsArrayLowercase = minorWordsArray.map((word, i) => {
        return word.toLowerCase();
    })
    officialMinorWordsArray = [... minorWordsArrayLowercase];
  }
  const finishedTitleArray = titleArray.map((word, i) => {
    if (i === 0) {
        return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    }
    else if (officialMinorWordsArray.length >= 1) {

        if (officialMinorWordsArray.includes(word.toLowerCase())) {
            return word.toLowerCase();
        }
        else {
            return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
        }
    }
    else {
        return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    }
  });
  const finishedTitle = finishedTitleArray.join(' ');
  return finishedTitle;
};

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));

// Best answer on site

function titleCase2(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }