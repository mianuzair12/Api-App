import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
task='';
taskList:{id:number,task:string}[]=[]
addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.task});
  this.task='';
  console.log(this.taskList)
}
removeTask(taskId:number){
this.taskList=this.taskList.filter((item=>item.id!=taskId));
}
}



// task='';
// taskList:{id:number,task:string}[]=[];
// addTask(){
//   this.taskList.push({id:this.taskList.length+1,task:this.task})
//   this.task='';
//   console.log(this.taskList)
// }
// deleteTask(taskId:number){
//  this.taskList= this.taskList.filter((item=>item.id!=taskId))
// }