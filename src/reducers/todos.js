import { ACTION } from '../constants';
import { getTodos, saveLastId, saveTodo } from '../shared/storage';

function todos(state = getTodos(), action) {
  if (action.type === ACTION.ADD_TODO) {
    let list = [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
        isEdit: false,
        editText: action.text
      }
    ];
    saveLastId(action.id);
    saveTodo(list);
    return list;
  }

  else if (action.type === ACTION.TOGGLE_TODO) {
    let list = state.map(todo =>
      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    saveTodo(list);
    return list;
  }

  else if (action.type === ACTION.DELETE_TODO) {
    let list = state.filter(todo => todo.id !== action.id);
    saveTodo(list);
    return list;
  }

  else if (action.type === ACTION.SET_EDIT) {
    let list = state.map(todo => 
      todo.id === action.id ? { ...todo, isEdit: action.isEdit } : todo);
    saveTodo(list);
    return list;
  }

  else if (action.type === ACTION.CANCEL_EDIT) {
    let list = state.map(todo => 
      todo.id === action.id ? { ...todo, isEdit: action.isEdit } : todo);
    saveTodo(list);
    return list;
  }

  else if (action.type === ACTION.UPDATE_TODO) {
    let list = state.map(todo =>
      todo.id === action.id ? { ...todo, isEdit: action.isEdit, text: action.text, editText: action.text } : todo);
    saveTodo(list);
    return list;
  }

  return state;
}

export default todos;