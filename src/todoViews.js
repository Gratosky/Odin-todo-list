//todoView.js

const todoListElement = document.getElementById('todo-list')

export const todoView = {
    renderTodo(todoItem) {
        const li = document.createElement('li')
        li.dataset.id = todoItem.id
        li.textContent = todoItem.title
    }
}

