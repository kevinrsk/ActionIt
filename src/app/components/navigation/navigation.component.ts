import {Component, OnInit} from '@angular/core'

@Component({
    templateUrl: 'navigation.component.html',
    selector: 'aiNavigation',
    styles:  [require('./navigation.component.less').toString()]
})
export class NavigationComponent implements OnInit {
    ngOnInit(): void {
        this.projects = [
            new Project({title: 'Personal', color: '#fb886e'}),
            new Project({title: 'Shopping', color: '#cccccc'}),
            new Project({title: 'Work', color: '#e4c4a8'}),
            new Project({title: 'Errand', color: '#74e8d3'})
        ]
    }
    areAnyOverDue(): boolean {
        return true;
    }
    areAnySevenDaysOverDue(): boolean{
        return false;
    }
    isCurrent(): boolean {
        return true;
    }
    projects: Project[];
}

export class Project {
    public constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    }

    title: string;
    description: string;
    color: string;
}