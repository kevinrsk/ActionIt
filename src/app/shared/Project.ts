export interface IProject {
    id: number;
    title: string;
    color: string;
}

export class Project implements IProject {
    public id: number;
    public title: string;
    public color: string;

    constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    }
}
