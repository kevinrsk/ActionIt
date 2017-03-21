import { Component, Input } from '@angular/core';

@Component({
    selector: 'aiTimeItem',
    templateUrl: './timeitem.component.html',
    styles: [require('./navigation.component.scss').toString()]
})
export class TimeItemComponent {
    @Input() public timeItem = { title: '', limit: 0 };

    // todo: get this information from shared storage?
    public areAnyOverDue(): boolean {
        return true;
    }

    public isCurrent(): boolean {
        return true;
    }
}
