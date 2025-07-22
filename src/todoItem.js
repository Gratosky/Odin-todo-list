//class to create todo items
class TodoItem{
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

const item1 = new TodoItem('wash clothes', 'take some time to wash your clothes', '23-7-2025', 'must')
console.log(item1)