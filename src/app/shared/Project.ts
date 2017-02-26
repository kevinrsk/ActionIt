

export interface IProject {
    id: number;
    title: string;
    color: string;
}

export class Project implements IProject {
    constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    }

    id: number;
    title: string;
    color: string;

}