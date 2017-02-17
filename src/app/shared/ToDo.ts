import * as moment from "moment"
import Moment = moment.Moment;

export class ToDo {
    constructor(init?: Partial<ToDo>) {
        Object.assign(this, init);
    }

    title: string;
    dueDateUtc: Moment;
    priority: Priority;

    get dueDate(): Moment{
        return moment(this.dueDateUtc.toISOString())
    }

    get displayDate(): string {
        return this.dueDateUtc.format("MMM DD")
    }
}

enum Priority {
    High = 1,
    Medium,
    Low
}