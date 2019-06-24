import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  @Output()
  changeCheckboxEvent:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  getTextDecoration():string {
    return this.todo.isDone ? 'line-through' : 'none';
  }

  handleTodoCheck(event):void {
    this.changeCheckboxEvent.emit(this.todo);
  }



  ngOnInit() {
  }

}
