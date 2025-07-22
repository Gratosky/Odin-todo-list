export function formHandler(containerId, onNewTodoCallback) {
    const container = document.querySelector('.form-handler')

    if(!container) {
        console.error(`Container with Id '${containerId}' not found for form handler!`)
        return 
    }

    container.innerHTML = ''

    const todoForm = document.createElement('form')
    todoForm.id = 'todo-form'
    
    //create title input
    const newTodoTitleInput = document.createElement('input')
    newTodoTitleInput.type = 'text'
    newTodoTitleInput.id = 'new-todo-input'
    newTodoTitleInput.placeholder = 'Add a new todo'
    newTodoTitleInput.required = true

    //create due date input
    const newTodoDueDate = document.createElement('input')
    newTodoDueDate.type = 'date'
    newTodoDueDate.id = 'new-todo-due-date'

    //create importance select
    const newTodoImportanceSelect = document.createElement('select')
    newTodoImportanceSelect.id = 'new-todo-importance'

    const importanceOptions = [
        {value: '', text: 'No importance'},
        {value: 'low', text: 'Low'},
        {value: 'medium', text: 'Medium'},
        {value: 'urgent', text: 'Urgent'}
    ]

    importanceOptions.forEach(optionData => {
        const option = document.createElement('option')
        option.value = optionData.value
        option.textContent = optionData.text
        newTodoImportanceSelect.appendChild(option)
    })

    //create submit button
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Add Todo'

    //Append elements to the form
    todoForm.appendChild(newTodoTitleInput)
    todoForm.appendChild(newTodoDueDate)
    todoForm.appendChild(newTodoImportanceSelect)
    todoForm.appendChild(submitBtn)

    //append the form to the container
    container.appendChild(todoForm)

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const todoText = newTodoTitleInput.value.trim()
        const todoDueDate = newTodoDueDate.value
        const todoImportance = newTodoImportanceSelect.value

        if(todoText) {
            onNewTodoCallback(todoText, '', todoDueDate, todoImportance)
            newTodoTitleInput.value = ''
            newTodoDueDate.value = ''
            newTodoImportanceSelect = ''
        }
    })
}