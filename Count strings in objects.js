// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
  //returns 3

const strCountObj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    }

  function strCount(obj, counter){
    if (!counter) {
        counter = 0;
    }
    for (const prop in obj) {
      if (Array.isArray(prop)) {
        for (let i = 0; i < prop.length; i ++) {
          if (typeof prop[i] === 'string') {
            counter ++;
          }
        }
      }
      else if (typeof prop === 'object') {
          strCount(prop, counter);
      }
      else if (typeof prop === 'string') {
          counter ++;
      }
    }
    return counter;
   }