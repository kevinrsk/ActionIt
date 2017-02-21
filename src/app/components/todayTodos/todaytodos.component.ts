import {Component, OnInit} from '@angular/core'
import {IToDo} from '../../shared'
import {ToDoService} from '../../services'
import * as moment from 'moment'
import * as _ from 'underscore'

@Component({
    templateUrl: 'todaytodos.component.html',
    styles: [require('./todaytodos.component.scss').toString()]
})
export class TodayToDosComponent implements OnInit {
    constructor(private _todoService: ToDoService) {
    }

    ngOnInit(): void {
        this._todoService.getCurrentToDos().subscribe(
            todos => this.todos = todos,
            error => console.error(error)
        );
    }

    todos: IToDo[];

    overdue(): IToDo[] {
        let filtered = _.filter(this.todos, todo => {
            return todo.dueDate.isBefore(moment(), 'day');
        });
        return filtered;
    }

    today(): IToDo[] {
        let filtered = _.filter(this.todos, todo => {
            return todo.dueDate.isSame(moment(), 'day');
        });
        return filtered;
    }
}

