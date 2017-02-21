import {Component, Input} from '@angular/core'

@Component({
    selector: 'aiTimeItem',
    templateUrl: './timeitem.component.html',
    styles: [require('./navigation.component.scss').toString()]
})
export class TimeItemComponent {
    @Input() timeItem = {title: '', limit: 0};

    // todo: get this information from shared storage?
    areAnyOverDue(): boolean {
        return true;
    }

    isCurrent(): boolean {
        return true;
    }

}