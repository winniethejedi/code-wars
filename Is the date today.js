// This is a simple function that should take in a date object and return a boolean representing weather the date is today or not.

// Make sure that your function does not return a false positive by just checking just the day.

// My first solution

function isToday(date) {
    const today = new Date;
    return today.toDateString() == date.toDateString();
}

const today = new Date;
console.log(isToday(today));

// Best solution

function isToday(date) {
    return new Date().toDateString() === date.toDateString();
  }