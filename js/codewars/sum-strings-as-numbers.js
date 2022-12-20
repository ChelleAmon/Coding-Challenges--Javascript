// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.


// Link: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript


// Date completed: 12/20/2022

// First Solution-- Start --------------------------------------------------------------------
function sumOfStrings(a,b) { 
  const firstNum = convertToNumber(a)
  const secondNum = convertToNumber(b)
  
  return String(firstNum + secondNum)
  
}

function convertToNumber(string){
  return BigInt(string);
}

console.log(sumOfStrings('123', '456'))
// First Solution-- End --------------------------------------------------------------------


// Second Solution-- Start --------------------------------------------------------------------
const sumStrings = (a ,b) => String(BigInt(a) + BigInt(b))

console.log(sumStrings('123', '456'))
// Second Solution-- End --------------------------------------------------------------------


export {sumOfStrings, sumStrings}