// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 

// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

//Medium(3)
let num1 = 336;
let num2 = 360;
function largestDivisor(num1, num2) {
  // let num1 = 336;
  // let num2 = 360;
  let divisor = 1;
  // We start with a divisor of 1.
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    // We loop from 1 up to the smallest of the two numbers.
    if (num1 % i === 0 && num2 % i === 0) {
      // If i divides both numbers without a remainder, we update the divisor.
      divisor = i;
    }
  }
  return divisor;
  // We return the largest common divisor.
}
console.log(largestDivisor(num1, num2));
let num1 = 2;
let num2 = 3;
largestDivisor(num1);
// let str = ["{},[],()"];
// function brackets(str) {
//   if (str.indexOf("{},[],()")) {
//     console.log(Boolean);
//   } else {
//     console.log(brackets("{hello}"));
//   }
// }
// brackets(str);