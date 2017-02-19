import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as _ from 'underscore'

import {ToDo, IToDo} from '../shared/ToDo';

@Injectable()
export class ToDoService {

    url: string = 'api/todos/todos.json';

    constructor(private _http: Http) {
    }

    getCurrentToDos(): Observable<IToDo[]> {
        return this._http.get(this.url)
                .map((resp: Response) => _.map(resp.json(), item => new ToDo(item)))
//                .do(data => console.log('ALL: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error')
    }
}