import {Component} from '@angular/core';

interface Student {
  name: string;
  age: number;
  gpa: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  numbers: number[];
  message: string;
  isOk: boolean;
  students: Student[];
  display: string;
  tasks: string[];


  constructor() {
    console.log("Message from Component constructor");

    this.title = 'KBTU';
    this.numbers = [4, 6, 1, 2];
    this.message = 'Message from component';
    this.isOk = true;
    this.students = [
      {
        name: 'Student 1',
        age: 20,
        gpa: 3.8
      },
      {
        name: 'Student 2',
        age: 21,
        gpa: 3.0
      },
      {
        name: 'Student 3',
        age: 19,
        gpa: 4
      },
      {
        name: 'Student 4',
        age: 19,
        gpa: 4
      }
    ];
    this.display = '';
    this.tasks = [];


  }

  toggleMsg() {
    console.log('btn was clicked');
    // if(this.isOk)
    //   this.isOk = false;
    // else
    //   this.isOk = true;
    this.isOk = !this.isOk;

    this.numbers.push(Math.floor(Math.random() * 100));
  }

  addTask() {
    if(this.display !== ''){
      this.tasks.push(this.display);
      this.display = '';
    } else {
      alert("Enter your task.")
    }
  }

  removeTask(index: number){
    this.tasks.splice(index, 1);
  }


}
