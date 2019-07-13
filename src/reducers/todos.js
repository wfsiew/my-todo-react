import { ACTION } from '../constants';

let initialState = [];

function getInitialState() {
  let lx = localStorage.getItem('todos');
  if (!lx) {
    initialState = [];
  }

  else {
    initialState = JSON.parse(lx);
  }

  return initialState;
}

function saveTodo(list, id) {
  if (id) {
    localStorage.setItem('lastid', id.toString());
  }

  localStorage.setItem('todos', JSON.stringify(list));
}

function todos(state = getInitialState(), action) {
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
    saveTodo(list, action.id);
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