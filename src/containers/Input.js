import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.todo.trim()) return;
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    return (
      <div className="mt-2">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <div className="col-md-12 input-group">
              <input
                type="text"
                id="todo"
                name="todo"
                value={this.state.todo}
                onChange={this.handleChange}
                placeholder="Type in a new todo" 
                className="form-control"
              />
              <div className="input-group-append">
                <button type="submit" disabled={this.state.todo === ''} className="btn btn-primary">Add Todo</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Input);