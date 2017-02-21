import * as moment from 'moment'
import Moment = moment.Moment;

export interface IToDo {
    id: number;
    projectId: number;
    title: string;
    dueDateUtc: string;
    priority: Priority;
    dueDate: Moment;
    displayDate: string;
}

export class ToDo implements IToDo {
    constructor(init?: Partial<ToDo>) {
        Object.assign(this, init);
    }

    id: number;
    projectId: number;
    title: string;
    dueDateUtc: string;
    priority: Priority;


    get dueDate(): Moment {
        return moment(this.dueDateUtc)
    }

    get displayDate(): string {
        return moment(this.dueDateUtc).format('MMM DD')
    }

    get isOverDue(): Boolean {
        return this.dueDate.isBefore(moment(), 'day')
    }
}

enum Priority {
    High = 1,
    Medium,
    Low
}