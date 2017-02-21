import {Component, Input} from '@angular/core'
import {ToDo} from '../../shared'


@Component({
    selector: 'aiTodo',
    templateUrl: './todo.component.html',
    styles: [require('./todo.component.scss').toString()]

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

    get borderColor(): string {
        if (this.todo.isOverDue) return '#ac0000';
        return '#c0c0c0';
    }

    get backgroundColor(): string {
        if (this.todo.isOverDue) return '#f5e5e5';
        return 'white';
    }
}