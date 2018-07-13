// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// My first solution

function removeRotten(bagOfFruits){
    if (bagOfFruits === null || bagOfFruits === undefined || bagOfFruits === undefined) {
        return [];
    }
    else {
        const returnedFruits = bagOfFruits.map((fruit, i) => {
            if (fruit.includes('rotten')) {
                return fruit.substring(fruit.indexOf('n') + 1).toLowerCase();
            }
            else {
                return fruit;
            }
        })
        return returnedFruits;
    }

  console.log(removeRotten(["apple","rottenBanana","apple"]));

  // Best solution on site

  function removeRotten2(bagOfFruits){
    if(!bagOfFruits || !bagOfFruits.length) {return [];} 
    else {return bagOfFruits.map(e => e.replace(/^rotten/g, '').toLowerCase())};
  }