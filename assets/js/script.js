/*
console.log(window.document);   // displays the element's HTML
console.dir(window.document);   // displays the HTML element as an object

//var btn = window.document.querySelector("button");
var buttonE1 = document.querySelector("#save-task").textContent;
console.dir(buttonE1);

buttonE1.addEventListener("click", function() {
    alert("Button Clicked");
});
*/

//var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);