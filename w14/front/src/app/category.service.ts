import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Category, Token} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.BASE_URL}/api/categories/`
    )
  }

  createCategory(name: string): Observable<Category> {
    return this.http.post<Category>(
      `${this.BASE_URL}/api/categories/`,
      {name}
    )
  }
}
