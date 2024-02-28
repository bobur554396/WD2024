import {Injectable} from '@angular/core';
import {POSTS} from "./fake-db";
import {Post} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) {
  }

  // getPosts() {
  //   return POSTS;
  // }
  //
  // getPost(id: number) {
  //   const post = POSTS.find((x) => x.id === id);
  //   return post as Post;
  // }

  getPosts(): Observable<Post[]> {
    return this.client.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.client.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }


}
