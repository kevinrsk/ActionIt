import {Component} from '@angular/core'
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './newtodo.component.html',
    styles: [require('./newtodo.component.scss').toString()]
})
export class NewToDoComponent {
    constructor(private _activeModal: NgbActiveModal) {
        console.log('New todo component')
    }

    title: string;

    addTodo() {
        this._activeModal.close('Add');
    }
}