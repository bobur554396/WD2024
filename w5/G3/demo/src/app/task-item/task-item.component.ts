import {Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnDestroy {
  @Input() task: Task;
  @Output() remove = new EventEmitter();

  constructor() {
    console.log('Task item constructor');
    this.task = new Task(1, '');
  }

  ngOnInit(): void {
    console.log('ngOnInit hook');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy hook');
  }

  removeTask() {
    this.remove.emit(this.task.id);
  }

}
