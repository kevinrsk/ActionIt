import {Component} from '@angular/core'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewToDoComponent} from '../todo/newtodo.component';

@Component({
    templateUrl: 'todoscontainer.component.html',
    styles: [require('./todoscontainer.component.scss').toString()]
})
export class TodosContainerComponent {

    constructor(private _modalService: NgbModal) {
    }


    addTask() {
        this._modalService.open(NewToDoComponent);
        console.log('Add task');
    }
}