import {Component, OnInit} from '@angular/core'
import {IToDo} from '../../shared'
import {ToDoService} from '../../services'
import * as moment from 'moment'
import * as _ from 'underscore'
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'todos.component.html',
    styles: [require('./todos.component.scss').toString()]
})
export class ToDosComponent implements OnInit {
    constructor(private _todoService: ToDoService, private _route: ActivatedRoute) {
    }

    routeData: IExtraRouteData;

    ngOnInit(): void {

        // todo: Check that these three lines work
        //  this._route.data.subscribe(data => {
        //     this.routeData = <IExtraRouteData>data; 
        // });     

        this.routeData = <IExtraRouteData>this._route.snapshot.data;
        console.log(this.routeData);

        this._todoService.getCurrentToDos().subscribe(
            todos => this.todos = todos,
            error => console.error(error)
        );
    }

    todos: IToDo[];

    overdue(): IToDo[] {
        let filtered = _.chain(this.todos)
            .filter(todo => {
                return todo.dueDate.isBefore(moment().add(this.routeData.days), 'day');
            })
            .sortBy(todo => todo.dueDate);
        return filtered.value();
    }

    today(): IToDo[] {
        let filtered = _.filter(this.todos, todo => {
            return todo.dueDate.isSame(moment(), 'day');
        });
        return filtered;
    }

    inDateRange(): IToDo[] {
        let filtered = _.chain(this.todos).filter(todo => {
            if (this.routeData.days === 0) {
                return todo.dueDate.isAfter(moment(), 'day');
            }
            return todo.dueDate.isSameOrBefore(moment().add(this.routeData.days, 'day'), 'day')
                && todo.dueDate.isAfter(moment(), 'day');
        }).sortBy(todo => todo.dueDate);
        return filtered.value();
    }

}

interface IExtraRouteData {
    days: number;
    title: string;
}
