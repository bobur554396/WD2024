import {Component, OnInit} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  currentTask: Task;
  // _id: number = 1;

  constructor() {
    this.currentTask = new Task(1, '');
    this.newTasks = [
      // new Task(1, 'task 1'),
      // new Task(2, 'task 2'),
      // new Task(3, 'task 3')
    ];
  }

  ngOnInit(): void {
  }

  addTask() {
    if (this.currentTask.name !== '') {
      this.currentTask.id = Task.currentID++;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task(1, '');
    } else {
      alert("Enter the task title.");
    }
  }

  onNewTaskRemove(id: number) {
    this.newTasks = this.newTasks.filter((task) => task.id !== id);
  }

}
