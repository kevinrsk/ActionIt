import { Component, Input } from '@angular/core';
import { SimpleMessageService } from '../../shared/message-service';

@Component({
    selector: 'aiProjectNavItem',
    templateUrl: 'navigation.projectitem.component.html',
    styles: [require('./navigation.component.scss').toString(),
             require('./navigation.projectitem.component.scss').toString()]
})
export class NavigationProjectItemComponent {

    @Input() public project = {
        id: 0,
        title: '',
        color: ''
    };

    constructor(private _messageService: SimpleMessageService) {
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
