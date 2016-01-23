******Part1******
// use the for loop when you know which iteration to stop
for(var i=0;i<21;i+=2){
  console.log(i+" is even");
}

// use the while loop when you don't know when to stop the loop

var i = 0;
while (i<=20) {
  if(i%2===0){
console.log(i+" is even");
}
i++<=20;
}


******Part2******


function max(num1, num2){
  if(num1>num2){
    return num1;
  }
  else{
    return num2;
  }
}
max(123,234);


var maxOfThree = ["5", "7", "8"];
console.log(Math.max.apply(Math,maxOfThree));
// Math.max looks for the largest integer while "apply" passes the array to the function "maxOfThree". The parameter for "apply" is "this" inside that function. Since "max" doesn't depend on the current context so anything can be used in place of the 1st parameter.
