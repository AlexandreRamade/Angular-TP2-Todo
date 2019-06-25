import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_BASE_URL: string = "http://localhost:3000/todos";
  
  constructor(private http: HttpClient) { }
  
  getTodos() {
    return this.http.get(`${this.API_BASE_URL}`);
  }

  getTodoById(id:number) {
    return this.http.get(`${this.API_BASE_URL}/${id}s`);
  }

  postTodo(title:string) {
    return this.http.post(`${this.API_BASE_URL}`, {title, isDone: false});
  }

  deleteTodoById(id:number) {
    return this.http.delete(`${this.API_BASE_URL}/${id}`);
  }

  putTodo(todo:Todo) {
    return this.http.put(`${this.API_BASE_URL}/${todo.id}`, {id: todo.id, title: todo.title, isDone: !todo.isDone});
  }

}
