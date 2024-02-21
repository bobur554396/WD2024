import { Component, OnInit } from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  currentTask: Task;

  constructor() {
    this.currentTask = new Task( '');
    this.newTasks = [
        new Task('test task')
    ];
  }

  ngOnInit(): void {
  }

  addTask() {
    this.currentTask.id = Task.currentID++;
    if(this.currentTask.name !== ''){
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task('');
    } else {
      alert("Enter task title.");
    }
  }

  onTaskItemRemove(id: number) {
    this.newTasks = this.newTasks.filter((task) => task.id !== id);
  }

}
