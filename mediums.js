// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False


// function ana(str1,str2){

//     // Get lengths of both strings
//     let n1 = str1.length;
//     let n2 = str2.length;

//     // If length of both strings is not same,
//     // then they cannot be anagram
//     if (n1 != n2)
//         return false;

//     // Sort both strings
//     str1.sort();
//     str2.sort()

//     // Compare sorted strings
//     for (let i = 0; i < n1; i++)
//         if (str1[i] != str2[i])
//             return false;

//     return true;
//  }
 
// let str1=['g', 'r', 'a', 'm' ];
// let str2=['a', 'r', 'm' ];

// // Function Call
//     if (ana(str1, str2))
//         document.write("The two strings are"
//                            + " anagram of each other<br>");
//     else
//         document.write("The two strings are not"
//                            + " anagram of each other<br>");

//  console.log(ana)                          

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")