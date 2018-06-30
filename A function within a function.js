// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

// var three = always(3);
// three(); // returns 3


// My first answer
function always (n) {
    function never(n) {
      return n
    }
    return never(n);
  }

  console.log(always(true));