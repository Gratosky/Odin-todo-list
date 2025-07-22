import { parseISO, formatISO } from 'date-fns';

//class to create todo items
export class TodoItem{
    constructor(title, description, dueDateString, priority, completed = false, initialNote = '') {
        this.title = title
        this.description = description
        this.dueDate = dueDateString ? parseISO(dueDateString) : null
        this.priority = priority
        this.note = initialNote
        this.completed = completed
        this.id = Date.now() + Math.random()
    }

    addNote(text){
       this.note = text
    }

    toggleCompleted() {
        this.completed = !this.completed
    }

    static fromObject(obj) {
        const todo = new TodoItem(
            obj.title,
            obj.description,
            obj.dueDate ? formatISO(parseISO(obj.dueDate)) : null,
            obj.priority,
            obj.completed,
            obj.note,
            obj.id
        )
        return todo
    }
}

const item1 = new TodoItem('wash clothes', 'take some time to wash your clothes', '2025-07-23', 'must')
console.log(item1)