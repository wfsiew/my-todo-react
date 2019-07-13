import React, { Component } from 'react';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.saveTodo();
    }
  }

  deleteTodo = e => {
    e.stopPropagation();
    this.props.deleteTodo();
  }

  editTodo = e => {
    e.stopPropagation();
    this.props.editTodo();
  }

  saveTodo = () => {
    if (!this.state.text.trim()) return;
    this.props.updateTodo(this.state.text);
    this.props.cancelEditTodo();
  }

  cancelEditTodo = () => {
    this.setState({ text: this.props.text });
    this.props.cancelEditTodo();
  }

  render() {
    const { toggleComplete, isEdit, completed, text } = this.props;
    return (
      <li className="list-group-item">
        {!isEdit && (
          <div onClick={toggleComplete} style={{
            textDecoration: completed ? 'line-through' : 'none'
            }}>
            <div className="mr-2 d-inline">{text}</div>
            <div className="float-right">
              <button onClick={this.deleteTodo} className="btn btn-danger mr-2">Delete</button>
              <button onClick={this.editTodo} className="btn btn-success">Edit</button>
            </div>
          </div>
        )}
        {isEdit && (
          <div className="row">
            <div className="col-sm-6">
              <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="todo"
                className="form-control"
              />
            </div>
            <div className="col-sm-4">
              <button onClick={this.saveTodo} disabled={this.state.text === ''} className="btn btn-success mr-2">Save</button>
              <button onClick={this.cancelEditTodo} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        )}
      </li>
    )
  }
}

export default Todo;