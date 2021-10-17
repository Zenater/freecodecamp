/*Using var, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5oopsGlobal to without using the var keyword.
myGlobal should be defined

myGlobal should have a value of 10

myGlobal should be declared using the var keyword

oopsGlobal should be a global variable and have a value of 5
*/
// Declare the myGlobal variable below this line



function fun1() {
    var oopsGlobal =5;  // Assign 5 to oopsGlobal Here
    }
    var oopsGlobal =5; 
     var myGlobal = 10;
    
    function fun2() {
      var output = "";
      if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
      }
      console.log(output);
    }