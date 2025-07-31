import { parseISO, formatISO } from "date-fns";

const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

//class to create todo items
export class TodoItem {
  constructor(title, note, priority, completed = false) {
    this.title = title;
    this.note = note;
    //this.dueDate = dueDateString ? parseISO(dueDateString) : null;
    this.priority = priority;
    this.completed = completed;
    this.id = generateUniqueId();
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  static fromObject(obj) {
    const todo = new TodoItem(
      obj.title,
      obj.note,

      //obj.dueDate ? formatISO(parseISO(obj.dueDate)) : null,
      obj.priority,
      obj.completed,
      obj.id
    );
    return todo;
  }
}
