import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
    private tasks:Task[] =[]

    getAllTask() :Task[] {
        return this.tasks
    }

    createTask(title:string,description:string):Task{

        const id = new Date().toString();
        const task:Task={
            id,
            title,
            description,
            status:TaskStatus.OPEN
        }
        
        this.tasks.push(task)
        return task
    }
}
