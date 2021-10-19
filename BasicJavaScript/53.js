/* Use Conditional Logic with If Statements
Create an if statement inside the function to return Yes, 
that was true if the parameter wasThatTrue is true and return No, that was false otherwise

trueOrFalse should be a function

Passed
trueOrFalse(true) should return a string
Passed
trueOrFalse(false) should return a string
Passed
trueOrFalse(true) should return the string Yes, that was true
Passed
trueOrFalse(false) should return the string No, that was false*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue === true) {
       return "Yes, that was true";
    } if (wasThatTrue === false)
    return "No, that was false";
  }
  trueOrFalse(true);
  trueOrFalse(false);