document.addEventListener("DOMContentLoaded", () => {
  /* your code here */


const form = document.getElementById("create-task-form")
const tasklist = document.getElementById("tasks");

form.addEventListener("submit", (event)=>{
  event.preventDefault();

const task = document.getElementById("new-task-description").value;

buildToDo(task)
});


function buildToDo(task){
  const li = document.createElement("li")
  li.textContent = task

  tasklist.append(li)


}
});

