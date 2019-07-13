import { ACTION } from '../constants';

let lastid = 0;

function getLastId() {
  let id = localStorage.getItem('lastid');
  if (!id) {
    lastid = 0;
  }

  return ++lastid;
}

export function addTodo(text) {
  return {
    type: ACTION.ADD_TODO,
    id: getLastId(),
    text: text
  }
}

export function toggleComplete(id) {
  return {
    type: ACTION.TOGGLE_TODO,
    id: id
  }
}

export function deleteTodo(id) {
  return {
    type: ACTION.DELETE_TODO,
    id: id
  }
}

export function editTodo(id) {
  return {
    type: ACTION.SET_EDIT,
    id: id,
    isEdit: true
  }
}

export function cancelEditTodo(id) {
  return {
    type: ACTION.CANCEL_EDIT,
    id: id,
    isEdit: false
  }
}

export function updateTodo(id, text) {
  return {
    type: ACTION.UPDATE_TODO,
    id: id,
    isEdit: false,
    text: text
  }
}