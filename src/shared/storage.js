let lastid = 0;
let todos = [];

export function getLastId() {
  let id = localStorage.getItem('lastid');
  if (!id) {
    lastid = 0;
  }

  return ++lastid;
}

export function getTodos() {
  let lx = localStorage.getItem('todos');
  if (!lx) {
    todos = [];
  }

  else {
    todos = JSON.parse(lx);
  }

  return todos;
}

export function saveLastId(id) {
  localStorage.setItem('lastid', id.toString());
}

export function saveTodo(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}