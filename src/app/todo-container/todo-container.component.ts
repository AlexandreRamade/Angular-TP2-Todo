import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import * as _ from 'lodash';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<Todo> = [];

  constructor() { }

  ngOnInit() {

  }

  handleChangeCheckboxEvent(event) {
    let oldTodo:Todo = _.find(this.todos, (t => t.id === event.id));
    let newTodos:Array<Todo> = _.without(this.todos, oldTodo);
    this.todos = [...newTodos, {...oldTodo, isDone: !oldTodo.isDone}].sort((t1, t2) => t1.id-t2.id);

  }

  handleNewTodoEvent(event):void {
    this.todos = [...this.todos, new Todo(this.todos.length + 1, event, false)];
  }

  handleRessetTodoEvent(eevent):void {
    this.todos = [];
  }



}
