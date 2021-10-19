/*       Comparison with the Greater Than Operator
Add the greater than operator to the indicated lines so that the return statements make sense.

Passed
testGreaterThan(10) should return the string 10 or Under

Passed
testGreaterThan(11) should return the string Over 10

Passed
testGreaterThan(99) should return the string Over 10

Passed
testGreaterThan(100) should return the string Over 10

Passed
testGreaterThan(101) should return the string Over 100

Passed
testGreaterThan(150) should return the string Over 100

Passed
   */
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);