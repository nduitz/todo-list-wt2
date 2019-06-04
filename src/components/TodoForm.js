import React, { Component } from 'react'

let id = 5;

export default class TodoForm extends Component {

  render() {

    const handleAddTodoOnClick = () => {
      const todo = {
        id,
        title: this.refs.todoTitle.value,
        done: false
      }

      this.props.handleAddTodo(todo);

      id++;
      this.refs.todoTitle.value = '';
    }
  
    return (
      <div>
        <input ref="todoTitle"></input>
        <button onClick={handleAddTodoOnClick}>Add Todo</button>
      </div>
    )
  }
}
