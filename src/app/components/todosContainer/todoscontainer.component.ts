import { Component, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NewToDoComponent } from '../todo/newtodo.component';
import { MessageService } from '../../shared/MessageService';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'todoscontainer.component.html',
    styles: [require('./todoscontainer.component.scss').toString()]
})
export class TodosContainerComponent implements OnDestroy {
    private message: any;
    private subscription: Subscription;

    constructor(private _modalService: NgbModal, private _messageService: MessageService) {
        this.subscription = this._messageService.getMessage().subscribe((message) => {
            this.message = message;
        });
    }

    public showAddToDoDialog() {
        let modalRef: NgbModalRef = this._modalService.open(NewToDoComponent);
        modalRef.result.then((res) => {
            console.log(res);
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
