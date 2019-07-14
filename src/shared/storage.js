let lastid = 0;
let todos = [];

export function getLastId() {
  let id = localStorage.getItem('react-lastid');
  if (!id) {
    lastid = 0;
  }

  else {
    lastid = parseInt(id);
  }

  return ++lastid;
}

export function getTodos() {
  let lx = localStorage.getItem('react-todos');
  let id = localStorage.getItem('react-lastid');

  if (!id) {
    todos = [];
    lastid = 0;
  }

  else {
    todos = JSON.parse(lx);
    lastid = parseInt(id);
  }

  return todos;
}

export function saveLastId(id) {
  localStorage.setItem('react-lastid', id.toString());
}

export function saveTodo(todos) {
  localStorage.setItem('react-todos', JSON.stringify(todos));
}