console.log('Hello, Gregg!!')

import "./styles.css";
import { TodoItem } from "./todoItem"; 
import { createAndInitializeForm } from "./formHandler";
import { todoView } from "./todoViews";    
import { todoController } from "./todoController";

const itemNew = new TodoItem('bath', 'bath for face', '2025-07-22','important')
console.log(itemNew)



function main() {
    console.log('main loaded')

    todoController.init()

    console.log('todo after')

    createAndInitializeForm(todoController.addTodo.bind(todoController))

    document.getElementById('todo-list').addEventListener('click', todoController.handleTodoClick.bind(todoController))

    console.log('App started')

    
}

document.addEventListener('DOMContentLoaded', main)