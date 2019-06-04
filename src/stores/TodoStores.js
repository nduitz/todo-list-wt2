import { observable, action } from "mobx";

export default class TodoStore {

  @observable
  todos = [
    {id: 1, title: "WT2 bestehen", done: false},
    {id: 2, title: "Java2 bestehen", done: false},
    {id: 3, title: "Mathe2 bestehen", done: false},
    {id: 4, title: "Feiern gehen", done: false},
  ]

  @action
  addTodo(todo){
    console.log(todo)
    this.todos.push(todo)
  }
}
