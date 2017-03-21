import { Component, OnInit } from '@angular/core';
import { ProjectService } from './projectService';
import { IProject } from '../../shared/Project';

@Component({
    templateUrl: 'navigation.component.html',
    selector: 'aiNavigation',
    styles: [require('./navigation.component.scss').toString()]
})
export class NavigationComponent implements OnInit {

    public projects: IProject[];

    constructor(private projectService: ProjectService) {
    }

    public ngOnInit(): void {
        this.projectService.getProjects().subscribe(
            (projects) => this.projects = projects,
            (error) => console.error(error)
        );
    }
}
