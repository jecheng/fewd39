// var form = document.querySelector("#new-todo-item-form");
// var input = document.querySelector("#new-todo-item-input");
// var list = document.querySelector("#todo-list");

// function createItem(todo) {
//   var listItem = document.createElement("li");
//   listItem.textContent = todo;
//   list.appendChild(listItem);
// }

// another way to write function above
// function createItem(todo) {
//   var newListItem = "<li>" + todo + "</li>";
//   list.innerHTML += newListItem;
// }

// function formSubmitted(event) {
//   event.preventDefault();
//   createItem(input.value);
//   form.reset();
// }

// form.addEventListener("submit", formSubmitted);

// jQuery
var $form = $("#new-todo-item-form");
var $input = $("#new-todo-item-input");
var $list = $("#todo-list");

$form.on("submit", formSubmitted);

function formSubmitted(event){
  event.preventDefault();
  var newListItem = "<li>" + $input.val() + "</li>";
  $list.append(newListItem);
  $form[0].reset();
}

