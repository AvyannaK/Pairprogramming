// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]



// let number = [1,2,3,4,5,6,7]

// let remainder = (number % 2)


// function even () {
//     if (remainder == 0 ){
//         console.log(`${number} is even`)
// } else {
// console.log(`${number} is odd`)
// }
// }

function Numbers(arr) {

    var arr = [1,2,3,4,5,6,7,8,9,10];
  
    var evenNumbers = arr.filter(number => number % 2 == 0);
  
    console.log("Even numbers " + evenNumbers);
  
    var oddNumbers = arr.filter(number => number % 2 !== 0);
  
    console.log("Odd numbers " + oddNumbers);
  }
  
Numbers()


// 

