import { ACTION } from '../constants';
import { getLastId } from '../shared/storage';

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