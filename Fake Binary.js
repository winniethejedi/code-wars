// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const str1 = '45385593107843568';
const str2 = '509321967506747';
const str3 = '366058562030849490134388085';

// My first solution

function fakeBin(x){
    return x.split('').map((num, i) => {
        parseInt(num, 10)
        if (num < 5) {
            return '0';
        }
        else return '1';
    }).join('');
}

console.log(fakeBin(str1));
console.log(fakeBin(str2));
console.log(fakeBin(str3));

// Best solution on site

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
