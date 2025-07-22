console.log('Hello, Gregg!!')

import "./styles.css";
import { TodoItem } from "./todoItem"; 
import { formHandler } from "./formHandler";    
const itemNew = new TodoItem('bath', 'bath for face', '2025-07-22','important')
console.log(itemNew)
console.log(formHandler())

const newNote = itemNew.addNote('remind me later')
console.log(newNote)