import {Component, Input} from '@angular/core'
import {ToDo} from '../../shared'


@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styles: [require('./todo.component.less').toString()]

})
export class ToDoComponent {

    @Input() todo: ToDo;

    get title(): string {
        return this.todo.title;
    }

    get dueDate(): string {
        return this.todo.displayDate;
    }

    editable: boolean = false;

    toggleEditable(): void {
        this.editable = !this.editable;
    }
}