// Hard (1)
// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False
function brackets(str) {
    let stack = [];
    let bracketsMap = {
      "}": "{",
      "]": "[",
      ")": "(",
    };
    for (let i = 0; i < str.length; i++) {
      let bracket = str[i];
      if (bracket === "{" || bracket === "[" || bracket === "(") {
        stack.push(bracket);
      } else if (bracket === "}" || bracket === "]" || bracket === ")") {
        let lastBracket = stack.pop();
        if (bracketsMap[bracket] !== lastBracket) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }