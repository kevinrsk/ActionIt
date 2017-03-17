import {Component, Input} from '@angular/core'
import {ToDo} from '../../shared'
import {Priority} from '../../shared/ToDo';


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
        if (this.todo.priority === Priority.High) return '#ac0000';
        if (this.todo.priority === Priority.Medium) return '#f8801c';
        if (this.todo.priority === Priority.Low) return '#fcc12b';
        return '#c0c0c0';
    }

    get backgroundColor(): string {
        if (this.todo.priority === Priority.High) return '#f5e5e5';
        if (this.todo.priority === Priority.Medium) return '#fef2e8';
        if (this.todo.priority === Priority.Low) return '#fff6e1';
        return 'white';
    }
}