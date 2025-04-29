import { Controller, Get, Post,Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { title } from 'process';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){

    }

    //TODO:GetAll Task
    @Get()
    getAllTasks():Task[] {
      return this.taskService.getAllTask()
    }

    //TODO:Create Task
    @Post()
    createTasks(
        @Body('title') title:string,
        @Body('description') description:string
    ):Task{
    return this.taskService.createTask(title,description)
    }
}
