import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import * as _ from 'underscore';
import { ProjectConfig } from '../../shared/projectConfig';
import { IProject, Project } from '../../shared/Project';

@Injectable()
export class ProjectService {
    private url: string;

    constructor(private _http: Http, config: ProjectConfig) {
        this.url = config.url;
    }

    public getProjects(): Observable<IProject[]> {
        return this._http.get(this.url)
            .map((resp: Response) => _.map(resp.json(), (item) => new Project(item)))
            .do((data) => console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
