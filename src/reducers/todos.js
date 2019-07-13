import { ACTION } from '../constants';

function todos(state = [], action) {
  if (action.type === ACTION.ADD_TODO) {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
        isEdit: false,
        editText: action.text
      }
    ];
  }

  else if (action.type === ACTION.TOGGLE_TODO) {
    return state.map(todo =>
      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
  }

  else if (action.type === ACTION.DELETE_TODO) {
    return state.filter(todo => todo.id !== action.id);
  }

  else if (action.type === ACTION.SET_EDIT) {
    return state.map(todo => 
      todo.id === action.id ? { ...todo, isEdit: action.isEdit } : todo);
  }

  else if (action.type === ACTION.CANCEL_EDIT) {
    return state.map(todo => 
      todo.id === action.id ? { ...todo, isEdit: action.isEdit } : todo);
  }

  else if (action.type === ACTION.UPDATE_TODO) {
    return state.map(todo =>
      todo.id === action.id ? { ...todo, isEdit: action.isEdit, text: action.text, editText: action.text } : todo);
  }

  return state;
}

export default todos;