import { TodoItem } from "./todoItem";
import { loadTodos, saveTodos } from "./storage";
import { todoView } from "./todoViews";


let todos = []

export const todoController = {
    init() {
        console.log('init controller')
        const loadedData = loadTodos()
        console.log(loadTodos())
        todos = loadedData.map(data => TodoItem.fromObject(data))
        console.log('yamandems')
        this.renderAllTodos()
    },

    addTodo(title, description, dueDateString, priority, ) {
        const todoItem = new TodoItem(title, description, dueDateString, priority)
        todos.push(todoItem)
        todoView.renderTodo(todoItem)
        saveTodos(todos)
        console.log('add-todo controller')
    },

    deleteTodo(id) {
        const originalLength = todos.length
        todos = todos.filter(todo => todo.id !== id)
        if(todos.length < originalLength) {
            todoView.removeTodoElement(id)
            saveTodos(todos)
            console.log('delete controller')
        }
    },

    toggleTodoCompletion(id) {
        console.log('toggle controller')
        const todoCompleted = todos.find(todo => todo.id === id)
        if(todoCompleted) {
            todoCompleted.toggleCompleted()
        todoView.updateTodoElement(todoCompleted)
        saveTodos(todos)
    }
    },

    renderAllTodos() {
        console.log('remove all control')
        todoView.clearTodos()
        todos.forEach(todo => {
            todoView.renderTodo(todo)
        })
    },

    handleTodoClick(event) {
        console.log('handle click control')
        const target = event.target
        const listItem = target.closest('li')

        if(!listItem) return

        const id = parseInt(listItem.dataset.id)

        if (target.classList.contains('delete-button')) {
            this.deleteTodo(id)
        }else {
            this.toggleTodoCompletion(id)
        }
    }
}