import { Injectable } from "@angular/core";
import { Todo } from '../model/Todo';
import * as _ from 'lodash';
import { ApiServiceService } from './api-service.service';

@Injectable({
    providedIn: 'root'
})
export default class TodoServices {

    constructor(private api:ApiServiceService){}

    private todos:Array<Todo> = [];

    findAllTodos():Promise<Array<Todo>> {
       return new Promise((resolve, reject) => {
            this.api.getTodos()
            .subscribe((result:any) => {
                this.todos = result;
                resolve([...this.todos]);
            }, () => {
                reject('Erreur de findAllTodos dans TodoService');
            }, () => {
                console.log('findAllTodos : observable complete');
            });
        });
        
    }

    createTodo(title:string):Promise<Array<Todo>> {
        return new Promise((resolve, reject) => {
            this.api.postTodo(title)
            .subscribe((result:any) => {
                this.todos = [...this.todos, new Todo(result.id, result.title, result.isDone)];
                resolve([...this.todos]);
            }, () => {
                reject('Erreur de createTodo() dans TodoService');
            }, () => {
                console.log('findAllTodos : observable complete');
            });
        });

    }

    resetAllTodos():Promise<Array<Todo>> {
        const todosToDelete = this.todos.map(t => this.api.deleteTodoById(t.id).toPromise());
        return new Promise((resolve, reject) => {
            Promise.all(todosToDelete)
                .then(() => {
                    this.todos = []
                    resolve([...this.todos]);   
                })
                .catch(() => console.log('Erreur lors de la supression des Todos (resetAllTodos) dans TodoService'));
        });
        

    }

    updateTodo(todo:Todo):Promise<Array<Todo>> {
        return new Promise((resolve, reject) => {
            this.api.putTodo(todo)
            .subscribe((result:any) => {
                _.remove(this.todos, (t => t.id === result.id));
                this.todos = [...this.todos, new Todo(result.id, result.title, result.isDone)].sort((t1, t2) => t1.id-t2.id);
                resolve([...this.todos]);
            }, () => {
                reject('Erreur de updateTodo() dans TodoService');
            }, () => {
                console.log('updateTodo : observable complete');
            });
        });
    }


}