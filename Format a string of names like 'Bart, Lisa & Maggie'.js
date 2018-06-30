// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


//My first solution
function list(names){
  namesArray = [];  
  if (names.length === 0) {
    return '';
  }
  else if (names.length === 1 && names[0] === '') {
    return '';
  }
  else if (names.length === 1 && names[0] !== '') {
    return names[0].name;
  }
  
  else {
    String.prototype.replaceAt=function(index, replacement) {
      return this.substr(0, index) + replacement+ this.substr(index + replacement.length - 1);
    };
    
    names.forEach((nameObj, i) => {
      namesArray.push(nameObj.name);
    })
    
    const namesString = namesArray.join(', ');
    const lastCommaIndex = namesString.lastIndexOf(',');
    const finalNamesString = namesString.replaceAt(lastCommaIndex, ' & ')
    
    return finalNamesString;
  }
  
}

//best solution on the website
function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }