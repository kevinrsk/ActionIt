import {Component, Input} from '@angular/core'

@Component({
    selector: 'aiProjectNavItem',
    templateUrl: 'projectitem.component.html',
    styles: [require('./navigation.component.scss').toString()]
})
export class NavigationProjectItemComponent {
    @Input() project = {
        title: '',
        color: ''
    }
}