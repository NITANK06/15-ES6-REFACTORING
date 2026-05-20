

const taskInput =
  document.getElementById("taskInput");

const addBtn =
  document.getElementById("addBtn");

const taskList =
  document.getElementById("taskList");


const addTask = () => {

  const taskText =
    taskInput.value.trim();


  if(!taskText){

    alert("Please enter a task");

    return;

  }


  const li =
    document.createElement("li");

  li.className = "task-item";

 
  const span =
    document.createElement("span");

  span.innerText = taskText;


  const completeBtn =
    document.createElement("button");

  completeBtn.innerText = "Complete";

  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", () =>
    li.classList.toggle("completed")
  );


  const deleteBtn =
    document.createElement("button");

  deleteBtn.innerText = "Delete";

  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () =>
    li.remove()
  );



  const buttonContainer =
    document.createElement("div");

  buttonContainer.className =
    "task-buttons";

  buttonContainer.append(
    completeBtn,
    deleteBtn
  );


  li.append(span, buttonContainer);

  taskList.appendChild(li);

 

  taskInput.value = "";

};


addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", e => {

  if(e.key === "Enter"){

    addTask();

  }

});
