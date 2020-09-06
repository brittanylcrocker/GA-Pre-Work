// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function

function hello(name) {
  console.log("Hello I am " + name)
}
hello("Brittany")

// PROBLEM 2
// Modify this function to accept two parameters, representing two numbers you want to multiply.
// Then, add a code block that will multiply the two parameters and return the output.
// The code block below the function is meant to check your work for the arguments 2 and 2.
function multiply(numOne, numTwo){
  return numOne * numTwo
}g

const four = multiply(2, 2);
if(four === 4){
  console.log("The multiply function works!");
}else{
  console.log("Something's wrong with the multiply function!")
}


// PROBLEM 3
// Write a function that accepts an array as a parameter.
// The function should loop through the given array and console.log each element in the array.
// Create your own array to test your work.

const food = ["broccoli", "chickpeas", "dark choc"]

for (i = 0; i < food.length; i++) {
  console.log(food[i])
}



// PROBLEM 4
// Write a function that finds the maximum number in a given array.
// Loop through the array and keep track of the biggest number seen so far.
// Once the loop is over, return the biggest number in the array.

const numbersArray = [1, 3, 7, 5, 22] 
const maxNumber = Math.max(...numbersArray)

function biggestNum (numbersArray) {
  for (i=0; i < numbersArray.length; i++) {
    console.log(numbersArray[i])
    if (i === numbersArray.length) {
      console.log("The Loop is finished")
    }
  }
 
}
biggestNum(numbersArray)
console.log("The biggest number in the array numberArray is " + maxNumber)


