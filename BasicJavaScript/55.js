/* Comparison with the Strict Equality Operator

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7
testStrict(10) should return the string Not Equal

Passed
testStrict(7) should return the string Equal

Passed
testStrict("7") should return the string Not Equal

Passed
You should use the === operator*/

// Setup
// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);