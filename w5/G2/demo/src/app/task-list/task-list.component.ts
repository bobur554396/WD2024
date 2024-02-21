import { Component, OnInit } from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;


  constructor() {
    this.currentTask = new Task(1, '');
    this.doneTasks = [];
    this.newTasks = [
      new Task(1, 'asd')
    ];
  }

  ngOnInit(): void {
  }

  addTask() {
    if(this.currentTask.name !== ''){
      this.currentTask.id = Task.currentID++;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task(1, '');
    } else {
      alert("Enter task title.");
    }
  }

  onNewTaskRemove(id: number) {
    this.newTasks = this.newTasks.filter((task) => task.id !== id);
  }

}
