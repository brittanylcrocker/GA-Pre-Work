// PROBLEM 1
// Add an event listener to the button with the generate-greeting id
// When the button is clicked, trigger the sayHello function
function sayHello(){
  console.log("hello!");
}
document.querySelector("#generate-greeting").addEventListener('click', sayHello)


// PROBLEM 2
// When the user clicks the "Add to the List!" button:
// 1) Add a new li to the .todos ul
// 2) Fill in the li with the text from the input field
// 3) Reset the value of the input field to be empty

document.querySelector("#generate-todo").addEventListener('click', addLi)
document.querySelector("#generate-todo").addEventListener("click", reset)


function addLi () {
  const li = document.createElement("LI")
  li.addEventListener("click", lineThrough)
  const ul = document.querySelector("ul")
 
    
  const inputText = document.querySelector("input").value
  
  li.innerText = inputText
  
  ul.appendChild(li)
  
}

function reset (){
  document.querySelector("input").value = ''
}



// PROBLEM 3
// When the user clicks any of the li items you've added, cross it out (add styling to create the line through effect)
// This will involve attaching a listener to each <li> as you add them
// You will have to modify the code you've written above!

function lineThrough () {
    
  this.style.textDecoration = "line-through"
}

// for (i = 0; i < li.length; i--) {
//   li[i].addEventListener("click", lineThrough)
// }