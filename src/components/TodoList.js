import React, { Component } from 'react'
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react';

export default 
@observer
class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  }



  render() {
    const todos = this.props.todos;
    return (
      <ul>
      {todos.map( (todo) => <TodoListItem key={todo.id} todo={todo}></TodoListItem>)}
      </ul>
    )
  }
}
