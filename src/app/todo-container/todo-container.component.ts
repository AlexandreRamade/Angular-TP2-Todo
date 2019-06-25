import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import * as _ from 'lodash';
import TodoServices from '../service/TodoServices';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<Todo> = [];

  constructor(private todoServices:TodoServices) { }

  ngOnInit() {
    this.findAllTodos();
  }

  findAllTodos():void{
    this.todoServices.findAllTodos().then(result =>this.todos = result);
  }

  handleNewTodoEvent(title):void {
    this.todoServices.createTodo(title).then(result => this.todos = result);
  }

  handleChangeCheckboxEvent(todo) {
    this.todoServices.updateTodo(todo).then(result => this.todos = result);

  }

  handleRessetTodoEvent(event):void {
    this.todoServices.resetAllTodos().then(result => this.todos = result);
  }



}
