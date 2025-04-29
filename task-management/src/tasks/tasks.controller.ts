import { Controller, Get, Post,Body, Param, Delete } from '@nestjs/common';
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

    //TODO:GetSelect by Id
    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
     return this.taskService.getTaskById(id)
    }

    //TODO:Create Task
    @Post()
    createTasks(
        @Body('title') title:string,
        @Body('description') description:string
    ):Task{
    return this.taskService.createTask(title,description)
    }

    //TODO:Delete Task
    @Delete('/:id')
    deleteTask(@Param('id') id:string){
      this.taskService.deleteTask(id);
      return `Task ${id} is delete Successfully!!`
    }
}
