const STORAGE_KEY = "todos";

export function saveTodos(todos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error("Error saving todos to localStorage:", e);
  }
}

export function loadTodos() {
  try {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (e) {
    console.error("Error loading todos from localStorage:", e);
    return [];
  }
}
