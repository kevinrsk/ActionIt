import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './newtodo.component.html',
    styles: [require('./newtodo.component.scss').toString()]
})
export class NewToDoComponent {
    public title: string;

    constructor(public activeModal: NgbActiveModal) {
        console.log('New todo component');
    }

    public addTodo() {
        if (this.title && this.title !== '') {
            this.activeModal.close({ Save: true, Title: this.title });
        }
    }
}
