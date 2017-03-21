import { Component } from '@angular/core';
import '../../public/css/styles.scss';
import { ToDoService } from './components/todos';
import { ProjectService } from './components/navigation';
import { MessageService } from './shared/MessageService';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [require('./app.component.scss').toString()],
//    styles: [require('../../public/css/styles.scss').toString(), require('./app.component.scss').toString()],
    providers: [ToDoService, ProjectService, MessageService]
})
export class AppComponent {
}
