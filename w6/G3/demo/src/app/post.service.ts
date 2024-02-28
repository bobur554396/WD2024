import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL: string = 'http://localhost:8000'

  constructor(private client: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>(`${this.BASE_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`${this.BASE_URL}/posts/${id}`);
  }

  createPost(newPost: Post): Observable<Post> {
    return this.client.post<Post>(`${this.BASE_URL}/posts`, newPost);
  }

  deletePost(id: number) {
    return this.client.delete(`${this.BASE_URL}/posts/${id}`)
  }


}
