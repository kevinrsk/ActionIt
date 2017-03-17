import {Component, Input} from '@angular/core'
import {MessageService} from '../../shared/MessageService';

@Component({
    selector: 'aiProjectNavItem',
    templateUrl: 'projectitem.component.html',
    styles: [require('./navigation.component.scss').toString(), require('./projectitem.component.scss').toString()]
})
export class NavigationProjectItemComponent {

    constructor(private _messageService: MessageService) {
    }

    @Input() project = {
        id: 0,
        title: '',
        color: ''
    }

    onSelectProject() {
        console.log('send message: ' + this.project.id);
        // send message to subscribers via observable subject
        this._messageService.sendMessage({'projectId': this.project.id});
    }

    clearMessage(): void {
        // clear message
        this._messageService.clearMessage();
    }
}