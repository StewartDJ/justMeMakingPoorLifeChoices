
console.log("is this linked?"); 

//Create an array that is two-dimensional (it has arrays as its value).

var twoDimensions = [[2, "dimensional"],["freaking", "array"]];

//Create a function that takes a two-dimensional array as an argument and console.logs every value in that  two dimensional array using for-loop inside a for-loop.

function takes(argOne){
 
    for (var i=0; i < argOne.length; i++) {
      for (var j=0; j < argOne[i].length; j++) {
        console.log(argOne[i][j]);
      }
    };
    }
    
    console.log(takes(twoDimensions));


//Create an array that is three-dimension. Each index of the array should contain an array. Each of those arrays should also have arrays inside them. Finally, the second level of arrays, should contain numbers or strings as their values.

var arrayOfDoom = [ [ ["this", "is"] , ["2" , "many"] , [ ["arrays" , "I"] , [ "hate" , "this"] ] , [ "question", "a lot" ]]]

console.log(arrayOfDoom);

//Create a function that receives two numbers as arguments. The function should return whichever argument is the largest. Finally, console.log the function passing in two numbers as arguments.

function isBigger(argOne, argTwo) {
    console.log("which is bigger " + argOne + " or " + argTwo + "?");
  
    if (argOne > argTwo) {
      console.log("it true, " + argOne + " is a big boi");
    }
  
    if (argOne < argTwo) {
    console.log("it true, " + argTwo + " is a big boi");
    
    }
  
  else { if (argOne == argTwo) {console.log ("you broke it")}}
  
  }
  
  console.log(isBigger(15, 11));

//Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different  string  if the two values are different. You may either test for equality in value or for equality in value /and/ type.

function isequal(argOne, argTwo) {
  console.log("are " + argOne + " and " + argTwo + " equal?");

  if (argOne === argTwo) {
    console.log("yee");
  }

else { if (argOne != argTwo console.log ("nah bruh")};

}

console.log(isequal(15, 11));
console.log(isequal(11, 11));