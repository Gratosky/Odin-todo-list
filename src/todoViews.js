//todo view helpers
const todoListElement = document.getElementById("todo-list");

export const renderTodo = (todoItem) => {
  //create the list item
  const listItem = document.createElement("li");
  listItem.textContent = todoItem;
  listItem.dataset.id = todoItem.id.toString();
  listItem.classList.add("list-item");

  if (todoItem.completed) {
    listItem.classList.add("completed");
  }

  //create a container for the main todo content
  const todoContent = document.createElement("div");
  todoContent.classList.add("todo-content");

  //create space for title
  const listItemTitle = document.createElement("p");
  listItemTitle.textContent = todoItem.title;
  listItemTitle.classList.add("todo-title");
  todoContent.appendChild(listItemTitle);

  //create space for note
  const listItemNote = document.createElement("p");
  listItemNote.textContent = todoItem.note;
  listItemNote.classList.add("todo-note");
  todoContent.appendChild(listItemNote);

  listItem.appendChild(todoContent);

  //create delete buttons for list items
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  listItem.appendChild(deleteButton);

  if (todoListElement) {
    todoListElement.appendChild(listItem);
  } else {
    console.error("todoListElement not found. Cannot render todo.");
  }
};

export const clearTodos = () => {
  if (todoListElement) {
    todoListElement.innerHTML = "";
  } else {
    console.error("todoListElement not found. Cannot clear todos.");
  }
  console.log("Finished clearing todos.");
};

export const removeTodo = (id) => {
  console.log("Attempting to remove element with ID...", id);

  if (todoListElement) {
    const todoElement = todoListElement.querySelector(`li[data-id='${id}']`);
    if (todoElement) {
      todoElement.remove();
      console.log(`Element with ID '${id}' removed successfully.`);
    } else {
      console.warn(`Warning: Element with ID '${id}' not found!`);
    }
  } else {
    console.error(
      "Error: todoListElement not found. Make sure the iD is correct!"
    );
  }
};

export const updateTodoElement = (todoItem) => {
  const todoElement = todoListElement.querySelector(
    `li[data-id='${todoItem.id}']`
  );
  console.log("Updating todo element with ID:", todoItem.id);

  if (todoElement) {
    const titleElement = todoElement.querySelector(".todo-title");
    const noteElement = todoElement.querySelector(".todo-note");

    if (titleElement) titleElement.textContent = todoItem.title;
    if (noteElement) noteElement.textContent = todoItem.note;

    if (todoItem.completed) {
      todoElement.classList.add("completed");
    } else {
      todoElement.classList.remove("completed");
    }
    console.log("Todo element updated successfully");
  } else {
    console.error(
      "Warning: Could not find element to update for todo ID:",
      todoItem.id
    );
  }
};
