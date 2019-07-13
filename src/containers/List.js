import { connect } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo, updateTodo, cancelEditTodo } from '../actions';
import TodoList from '../components/TodoList';

function getTodos(todos) {
  return todos;
}

function mapStateToProps(state) {
  return {
    todos: getTodos(state.todos)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleComplete: id => dispatch(toggleComplete(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: id => dispatch(editTodo(id)),
    updateTodo: (id, text) => dispatch(updateTodo(id, text)),
    cancelEditTodo: id => dispatch(cancelEditTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);