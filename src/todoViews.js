//todoView.js

const todoListElement = document.getElementById('todo-list')

export const todoView = {
    
    renderTodo(todoItem) {
        
        const listItem = document.createElement('li')

        listItem.dataset.id = todoItem.id
        listItem.textContent = todoItem.title
        listItem.classList.add('listItem')

        if(listItem.completed) {
            listItem.classList.add('completed')
        }

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.classList.add('delete-button')

        listItem.appendChild(deleteButton)
        todoListElement.appendChild(listItem)
        
    },

    clearTodos() {
        console.log('clear')
        todoListElement.innerHTML = ''
        console.log('finished clear')
    },

    removeTodoElement() {
        console.log('removing element:', todoElement)
        const todoElement = todoListElement.querySelector(`li[data-id='${todoItem.id}']`)
        console.log(`Target found:`, todoItem.id)
        if(todoElement) {
            todoElement.remove()
        }
    },

    updateTodoElement(todoItem) {
        const todoElement = listItem.querySelector(`li[data-id'${todoItem.id}']`)
        console.log('updating todo element')
        if(todoElement) {
            todoElement.textContent = todoItem.note

            if(todoItem.completed) {
                todoElement.classList.add('completed')
            }else {
                todoElement.classList.remove('completed')
            }

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('delete-button')
            todoElement.appendChild(deleteButton)
        }
        console.log('mime')
    },
    
}

