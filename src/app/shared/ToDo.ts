import * as moment from 'moment'
import Moment = moment.Moment;

export interface IToDo {
    title: string;
    dueDateUtc: string;
    priority: Priority;
    dueDate: Moment;

    displayDate: string;
}

export class ToDo implements IToDo{
    constructor(init?: Partial<ToDo>) {
        Object.assign(this, init);
    }

    title: string;
    dueDateUtc: string;
    priority: Priority;


    get dueDate(): Moment{
        return moment(this.dueDateUtc)
    }

    get displayDate(): string {
        return moment(this.dueDateUtc).format('MMM DD')
    }
}

enum Priority {
    High = 1,
    Medium,
    Low
}