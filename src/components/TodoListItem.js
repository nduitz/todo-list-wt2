import React, { Component } from 'react'
import { PropTypes } from "prop-types";

export default class TodoListItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
  }
  
  render() {
    const todo = this.props.todo
    return (
      <li>
        {todo.title}
      </li>
    )
  }
}
