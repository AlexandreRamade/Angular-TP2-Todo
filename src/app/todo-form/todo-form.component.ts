import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title:string;

  @Output()
  newTodoEvent:EventEmitter<string> = new EventEmitter<string>();

  @Output()
  resetTodosList:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  handleChangeTitleInput(event):void {
    this.title = event.target.value.trim();
  }

  creerNewTodoOnClick(event):void {
    if(this.title.trim().length > 1) {
      this.newTodoEvent.emit(this.title);
    }
  }

  ressetTodoListOnClick(event):void {
    this.resetTodosList.emit();
  }

  ngOnInit() {
  }

}
