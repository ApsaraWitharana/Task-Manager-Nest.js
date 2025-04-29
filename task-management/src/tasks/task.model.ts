export interface Task{
    id:string;
    title:string;
    description:string;
    status:TaskStatus;

}

export enum TaskStatus{
 DONE = 'DONE',
 IN_PROGRESS = 'IN_PROGRESS',
 OPEN = 'OPEN' 
}

// #/**
// #* @author : sachini Apsara
// #* @date : 2025-04-29
// #* @project : Task manager nest js
// #**/