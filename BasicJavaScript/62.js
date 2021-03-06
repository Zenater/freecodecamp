/*   
Comparison with the Less Than Or Equal To Operator
testLessOrEqual(0) should return the string Smaller Than or Equal to 12

testLessOrEqual(11) should return the string Smaller Than or Equal to 12
testLessOrEqual(12) should return the string Smaller Than or Equal to 12

testLessOrEqual(23) should return the string Smaller Than or Equal to 24

testLessOrEqual(24) should return the string Smaller Than or Equal to 24

testLessOrEqual(25) should return the string More Than 24

testLessOrEqual(55) should return the string More Than 24

You should use the <= operator at least twice
   */
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);