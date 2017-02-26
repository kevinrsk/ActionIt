import {Component} from '@angular/core';
import '../../public/css/styles.scss';
import {ToDoService} from './services/ToDoService';
import {ProjectService} from './services/ProjectService';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss').toString()],
    providers: [ToDoService, ProjectService]
})
export class AppComponent {
}