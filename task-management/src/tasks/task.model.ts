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