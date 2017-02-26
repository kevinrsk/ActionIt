import {Component, OnDestroy} from '@angular/core'
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NewToDoComponent} from '../todo/newtodo.component';
import {ToDoService} from '../../services/ToDoService';
import {MessageService} from '../../services/MessageService';
import {Subscription} from 'rxjs';

@Component({
    templateUrl: 'todoscontainer.component.html',
    styles: [require('./todoscontainer.component.scss').toString()]
})
export class TodosContainerComponent implements OnDestroy {
    message: any;
    subscription: Subscription;

    constructor(private _todoService: ToDoService, private _modalService: NgbModal, private _messageService: MessageService) {
        this.subscription = this._messageService.getMessage().subscribe(message => {
            this.message = message;
            console.log('Message received')
        });
    }


    showAddToDoDialog() {
        let modalRef: NgbModalRef = this._modalService.open(NewToDoComponent);
        modalRef.result.then(res => {
            console.log(res);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}