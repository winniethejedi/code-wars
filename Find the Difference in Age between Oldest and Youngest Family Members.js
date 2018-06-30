// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

// My first solution

function differenceInAges(ages){
    const answer = [];
    function sortNumber(a,b) {
        return a - b;
    }
    const sortedNumbers = ages.sort(sortNumber);

    answer.push(sortedNumbers[0])
    answer.push(sortedNumbers[sortedNumbers.length -1]);
    answer.push(sortedNumbers[sortedNumbers.length -1] - sortedNumbers[0])

    return answer;
}

// Best solution on site

function differenceInAges (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}