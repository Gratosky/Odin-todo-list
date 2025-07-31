import { todoController } from "./todoController";

export function createAndInitializeForm(containerId) {
  const container = document.getElementById("containerId");

  if (!container) {
    console.error(
      `Container with Id '${containerId}' not found for form handler!`
    );
    return;
  }

  container.innerHTML = "";

  const todoForm = document.createElement("form");
  todoForm.id = "todo-form";

  //create title input
  const newTodoTitleInput = document.createElement("input");
  newTodoTitleInput.type = "text";
  newTodoTitleInput.id = "new-todo-input";
  newTodoTitleInput.placeholder = "Add a new todo";
  newTodoTitleInput.required = true;

  //create due date input
  const newTodoNote = document.createElement("input");
  newTodoNote.type = "text";
  newTodoNote.id = "new-todo-note";
  newTodoNote.placeholder = "Add a note(optional)";

  //create importance select
  const newTodoImportanceSelect = document.createElement("select");
  newTodoImportanceSelect.id = "new-todo-importance";

  const importanceOptions = [
    { value: "", text: "No importance" },
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "urgent", text: "Urgent" },
  ];

  importanceOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    newTodoImportanceSelect.appendChild(option);
  });

  //create submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Todo";

  //Append elements to the form
  todoForm.appendChild(newTodoTitleInput);
  todoForm.appendChild(newTodoNote);

  todoForm.appendChild(newTodoImportanceSelect);

  todoForm.appendChild(submitBtn);

  //append the form to the container
  container.appendChild(todoForm);

  todoForm.addEventListener("submit", (e) => {
    console.log("submitting form");
    e.preventDefault();

    const todoTitle = newTodoTitleInput.value.trim();
    //const todoDueDate = newTodoDueDate.value;
    const todoNote = newTodoNote.value;
    const todoImportance = newTodoImportanceSelect.value;

    if (todoTitle) {
      console.log("submitted successfully and ready for next...");
      todoController.addTodo(todoTitle, todoNote, todoImportance);
      newTodoTitleInput.value = "";
      //newTodoDueDate.value = "";
      newTodoNote.value = "";
      newTodoImportanceSelect.value = "";
    }
  });
}
