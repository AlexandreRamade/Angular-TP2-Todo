import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input()
  todos:Array<Todo>;

  @Output()
  changeCheckboxEvent:EventEmitter<Todo> = new EventEmitter<Todo>();

  @ViewChild('todoItem', {static: false})
  todoItem:TodoItemComponent;

  constructor() { }

  handleChangeCheckboxEvent(todo) {
    this.changeCheckboxEvent.emit(todo);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
