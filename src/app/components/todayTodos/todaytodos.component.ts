import {Component, OnInit} from '@angular/core'
import {ToDo} from '../../shared'
import * as moment from 'moment'
import * as _ from 'underscore'

@Component({
    templateUrl: 'todaytodos.component.html',
    styles: [require('./todaytodos.component.less').toString()]
})
export class TodayToDosComponent implements OnInit {
    ngOnInit(): void {
        this.todos = [
            new ToDo({title: 'ActionIt', dueDateUtc: moment.utc()}),
            new ToDo({title: 'ActionIt', dueDateUtc: moment.utc([2011, 0, 1, 8])}),
            new ToDo({title: 'ActionIt', dueDateUtc: moment.utc([2018, 0, 1, 8])}),
        ];
    }

    todos: ToDo[];

    overdue(): ToDo[] {
        let filtered = _.filter(this.todos, todo => {
            return todo.dueDate.isBefore(moment(), 'day');
        });
        return filtered ;
    }

    today(): ToDo[] {
        let filtered = _.filter(this.todos, todo => {
            return todo.dueDate.isSame(moment(), 'day');
        });
        return filtered ;
    }
}

