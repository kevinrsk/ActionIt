import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [require('./app.component.less').toString()]
})
export class AppComponent { }