import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Category} from "./models";
import {CategoryService} from "./category.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Connection to Django app!';
  logged: boolean = false;
  username: string = "";
  password: string = "";
  categories: Category[] = [];
  newCategory: string = "";

  constructor(private categoryService: CategoryService) {
  }


  ngOnInit() {
    const access = localStorage.getItem("access");
    if (access) {
      this.logged = true;
      this.getCategories();
    }
  }

  login() {
    this.categoryService
      .login(this.username, this.password)
      .subscribe((data) => {
        this.logged = true;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        this.getCategories();
      })
  }

  logout() {
    this.logged = false;
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  getCategories() {
    this.categoryService
      .getCategories()
      .subscribe((data) => {
        this.categories = data;
      });
  }

  addCategory() {
    if (this.newCategory !== '') {
      this.categoryService
        .createCategory(this.newCategory)
        .subscribe((data) => {
          this.newCategory = "";
          this.categories.push(data);
        });
    } else {
      alert("Please, enter category name.")
    }
  }
}
