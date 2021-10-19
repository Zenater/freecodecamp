/*      Comparison with the Greater Than Or Equal To Operator
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

testGreaterOrEqual(0) should return the string Less than 10

Passed
testGreaterOrEqual(9) should return the string Less than 10

Passed
testGreaterOrEqual(10) should return the string 10 or Over

Passed
testGreaterOrEqual(11) should return the string 10 or Over

Passed
testGreaterOrEqual(19) should return the string 10 or Over

Passed
testGreaterOrEqual(100) should return the string 20 or Over

Passed
testGreaterOrEqual(21) should return the string 20 or Over

Passed
You should use the >= operator at least twice
   */
function testGreaterOrEqual(val) {
    if (val>=21) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);