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
  items: string[];

  constructor() {
    console.log('App Component constructor');
    this.title = 'Hello Angular!';
    this.numbers = [11, 22, 33, 44];
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
        gpa: 3.9
      },
      {
        name: 'Student 3',
        age: 19,
        gpa: 3.7
      }
    ];
    this.items = [];


    this.display = '';

  }

  addItem() {
    this.items.push(this.display);
    this.display = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  toggleMessage() {
    console.log('button was clicked');
    // if(this.isOk){
    //   this.isOk = false;
    // } else {
    //   this.isOk = true;
    // }
    this.isOk = !this.isOk;

    this.numbers.push(this.numbers.length + 1);
  }


}
