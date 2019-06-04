import React, { Component } from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { inject, observer } from 'mobx-react';

export default 
@inject("todoStore") @observer // mit mobx
class App extends Component {

  // mit state
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     todos: [
  //       {id: 1, title: "WT2 bestehen", done: false},
  //       {id: 2, title: "Java2 bestehen", done: false},
  //       {id: 3, title: "Mathe2 bestehen", done: false},
  //       {id: 4, title: "Feiern gehen", done: false}
  //     ]
  //   }
  // }
  
  render() {
    const {todos} = this.props.todoStore

    const handleAddTodo = (todo) => {
      this.props.todoStore.addTodo(todo)
      // mit state
      // this.setState((state) => ({
      //   todos: [...state.todos, todo]
      // }));
    }

    return (
      <div>
        <TodoList todos={todos}></TodoList>
        <TodoForm handleAddTodo={handleAddTodo}></TodoForm>
      </div>
    )
  }
}
