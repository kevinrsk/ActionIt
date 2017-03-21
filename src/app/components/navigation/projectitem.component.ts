import { Component, Input } from '@angular/core';
import { MessageService } from '../../shared/MessageService';

@Component({
    selector: 'aiProjectNavItem',
    templateUrl: 'projectitem.component.html',
    styles: [require('./navigation.component.scss').toString(),
             require('./projectitem.component.scss').toString()]
})
export class NavigationProjectItemComponent {

    @Input() public project = {
        id: 0,
        title: '',
        color: ''
    };

    constructor(private _messageService: MessageService) {
    }

    public onSelectProject() {
        console.log('send message: ' + this.project.id);
        // send message to subscribers via observable subject
        this._messageService.sendMessage({ projectId: this.project.id });
    }

    public clearMessage(): void {
        // clear message
        this._messageService.clearMessage();
    }
}
