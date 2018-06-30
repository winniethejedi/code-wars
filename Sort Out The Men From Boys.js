// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd  !alt !alt

// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys  !alt !alt

// Notes
// Return an array/list where Even numbers come first then odds

// Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

// Array/list size is at least 4 .

// Array/list numbers could be a mixture of positives , negatives .

// Have no fear , It is guaranteed that no Zeroes will exists . !alt

// Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

// Input >> Output Examples:
// 1- menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// 2- menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:
// Since , { -100, -96 , -94 } is the even numbers here , So it came first in ascending order , then the odds in descending order { -99 }

// Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

// 3- menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
// Explanation:
// Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

// Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .

// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed
// Enjoy Learning !!
// Zizou


// My first answer

function menFromBoys (array) {
    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    const uniqueArray = array.filter(onlyUnique);
      const evens = [];
      const odds = [];
      uniqueArray.forEach(number => {
          if (number % 2 === 1 || number % 2 === -1 ) {
              odds.push(number);
          }
          if (number % 2 === 0) {
              evens.push(number);
          }
      })
      evens.sort((a, b) => a - b);
      odds.sort((a, b) => b - a);
      const results = [...evens, ...odds];
      return results;
  }

  // Best answer on the site

  const menFromBoys1 = arr => {
    let [evens, odds] = [[], []];
    [...new Set(arr)].sort((a, b) => a - b) .forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
    return [...evens, ...odds];
  };