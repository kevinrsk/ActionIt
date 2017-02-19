import {Component, Input} from '@angular/core'

@Component({
    selector: 'aiTimeItem',
    templateUrl: './timeitem.component.html',
    styles: [require('./navigation.component.less').toString()]
})
export class TimeItemComponent {
    @Input() timeItem = {title: '', limit: 0};

    areAnyOverDue(): boolean {
        return true;
    }

    isCurrent(): boolean {
        return true;
    }

}