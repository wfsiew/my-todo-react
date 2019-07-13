import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

  render() {
    const { todos, toggleComplete, deleteTodo, editTodo, updateTodo, cancelEditTodo } = this.props;
    return (
      <ul className="list-group">
        {
          todos.map(todo => (
            <Todo key={todo.id} 
              text={todo.text}
              editText={todo.editText}
              isEdit={todo.isEdit}
              completed={todo.completed}
              toggleComplete={() => toggleComplete(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
              editTodo={() => editTodo(todo.id)}
              updateTodo={(text) => updateTodo(todo.id, text)}
              cancelEditTodo={() => cancelEditTodo(todo.id)}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList;