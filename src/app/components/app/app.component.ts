import { Component } from '@angular/core';
import '../../../../public/css/styles.scss';
import { ToDoService } from '../todos/todoService';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss').toString()],
  providers: [ToDoService]
})
export class AppComponent {
}
