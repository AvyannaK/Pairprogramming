// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
// Example 1:
// Input: vowelChecker(‘b’)
// Output: ‘This is not a vowel’
// Example 2:
// Input: vowelChecker(‘a’)
// Output: ‘This is a vowel’

// Vowel Checker example

function vowelChecker (x){
//VowelChecker will grab the first letter (character). . .
var firstChar = x.toLowerCase().charAt(0)

// then check if that first letter is a vowel

if(firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u"){
    console.log("This is a vowel");
} else {
    console.log("This is not a vowel");
}
}

vowelChecker("b");

