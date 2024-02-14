import { Component } from '@angular/core';


interface Product{
  title: string;
  price: number;
  rating: number;
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
  products: Product[];
  display: string;
  tasks: string[];

  constructor() {
    this.title = 'Hello KBTU!';
    this.numbers = [2, 1, 5, 10];
    this.message = 'Message from component';
    this.isOk = true;
    this.products = [
      {
        title: 'Product 1',
        price: 1000,
        rating: 4.7
      },
      {
        title: 'Product 2',
        price: 3000,
        rating: 4.9
      },
      {
        title: 'Product 3',
        price: 2000,
        rating: 4.6
      }
    ];
    this.display = '';
    this.tasks = [];
  }

  toggleMessage() {
    // console.log('btn was clicked');
    // if(this.isOk)
    //   this.isOk = false;
    // else
    //   this.isOk = true;
    this.isOk = !this.isOk;

    const rand = Math.floor(Math.random() * 100);
    this.numbers.push(rand);

  }

  addTask() {
    if(this.display !== ''){
      this.tasks.push(this.display);
      this.display = '';
    } else {
      alert("Please, enter your task.");
    }

  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
