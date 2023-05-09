// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example 1:                                                                                                                                       Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:		Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]



function isPrime(element) {
    for(var i = 2; i < element; i++) {
      if(element % i === 0) {
        return false;
      }
    }
    return element !== 1;
  }
  
  var array = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 25, 30];
  var primes = array.filter(isPrime);
  
  console.log("array: " + array);
  console.log("primes: " + primes);

