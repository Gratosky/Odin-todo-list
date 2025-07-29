import { TodoItem } from "./todoItem";
import { loadTodos, saveTodos } from "./storage";
import { renderTodo, removeTodo, updateTodoElement } from "./todoViews";

let todos = [];

export const todoController = {
  init() {
    console.log("init controller");
    const loadedData = loadTodos();
    todos = loadedData.map((data) => TodoItem.fromObject(data));
    this.renderAllTodos();
  },

  addTodo(title, description, dueDateString, priority, note) {
    const todoItem = new TodoItem(
      title,
      description,
      dueDateString,
      priority,
      note
    );
    todos.push(todoItem);
    renderTodo(todoItem);
    saveTodos(todos);
  },

  deleteTodo(id) {
    console.log("deleting selected todo...", id);
    const originalLength = todos.length;

    todos = todos.filter((todo) => todo.id !== id);

    if (todos.length < originalLength) {
      console.log(`To-do removed from array. New length:`, todos.length);

      removeTodo(id);
      saveTodos(todos);
    } else {
      console.warn(
        `Warning: No todo found in array with ID: ${id}. No action taken.`
      );
    }
  },

  toggleTodoCompletion(id) {
    console.log("toggle controller");
    const todoCompleted = todos.find((todo) => todo.id === id);
    if (todoCompleted) {
      todoCompleted.toggleCompleted();
      updateTodoElement(todoCompleted);
      saveTodos(todos);
    }
  },

  renderAllTodos() {
    console.log("displaying all todos...");
    //todoView.clearTodos()
    todos.forEach((todo) => {
      renderTodo(todo);
    });
  },

  handleTodoClick(event) {
    console.log("handle click control");
    const target = event.target;
    const listItem = target.closest("li");

    if (!listItem) return;

    const id = listItem.dataset.id;

    if (target.classList.contains("delete-button")) {
      this.deleteTodo(id);
    } else {
      this.toggleTodoCompletion(id);
    }
  },
};
