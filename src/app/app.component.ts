import { Component } from '@angular/core';
import '../../public/css/styles.css';
import {ToDoService} from "./services/ToDoService";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss').toString()],
    providers: [ToDoService]
})
export class AppComponent { }