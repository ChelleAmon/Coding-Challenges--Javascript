// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript


// Date completed: 12/20/2022

/** First solution: START **************************************************************** */
var summation = function (num) {
    return [...Array(num).keys()].map(num => num + 1).reduce((acc, curr) => acc + curr)
}

console.log(summation(1))
console.log(summation(3))
console.log(summation(8))
/** First solution: END **************************************************************** */

/** Second solution: START **************************************************************** */

function getSum(num){
    if(num > 0){
        return num + getSum(num - 1)
    } else {
        return num
    }
}
console.log(getSum(1))
console.log(getSum(3))
console.log(getSum(8))

/** Second solution: FINISH **************************************************************** */


export { summation, getSum };