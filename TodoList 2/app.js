// grabbing things: the form, the input, the parent
var form = document.querySelector("#new-todo-item-form");
var input = document.querySelector("#new-todo-item-input")
var parent = document.querySelector("#todo-list");


// todo is the variable for your input
function addListItem(todo) {
  // create list item
  var listItem = document.createElement("li");
  // grab value from inside input field
  // add the value todo to the new list item
  listItem.textContent = todo;
  // append to list
  // you don't need the "" since listItem is a variable not the li tag
  parent.appendChild(listItem);
}


function formSubmitted(event){
  event.preventDefault();
  addListItem(input.value);
  // form.reset();
}

// listen for click and add something
form.addEventListener("submit",formSubmitted);
