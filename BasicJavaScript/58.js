/* Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator.
 It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa.
 The strict inequality operator will not convert data types.
Passed
testStrictNotEqual("17") should return the string Not Equal

Passed
testStrictNotEqual(12) should return the string Not Equal

Passed
testStrictNotEqual("bob") should return the string Not Equal

Passed
You should use the !== operator*/
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);