import {Component, OnInit} from '@angular/core'
import {ProjectService} from '../../services/ProjectService';
import {IProject} from '../../shared/Project';

@Component({
    templateUrl: 'navigation.component.html',
    selector: 'aiNavigation',
    styles: [require('./navigation.component.scss').toString()]
})
export class NavigationComponent implements OnInit {

    constructor(private projectService: ProjectService) {
    }

    projects: IProject[];

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(
            projects => this.projects = projects,
            error => console.error(error)
        );
    }
}

