import {Component} from '@angular/core'
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NewToDoComponent} from '../todo/newtodo.component';
import {ToDoService} from "../../services/ToDoService";

@Component({
    templateUrl: 'todoscontainer.component.html',
    styles: [require('./todoscontainer.component.scss').toString()]
})
export class TodosContainerComponent {

    constructor(private _todoService: ToDoService, private _modalService: NgbModal) {
    }


    showAddToDoDialog() {
        let modalRef: NgbModalRef = this._modalService.open(NewToDoComponent);
        modalRef.result.then(res => {
            console.log(res);
        });
    }
}