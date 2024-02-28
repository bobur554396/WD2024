import {Component, OnInit} from '@angular/core';
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PostService} from "../post.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  newPost: Post;
  loaded: boolean = false;

  constructor(private postService: PostService) {
    this.newPost = {
      id: 101,
      title: '',
      body: ''
    }
  }

  ngOnInit() {
    this.getPosts();
  }

  addPost() {
    this.postService.createPost(this.newPost).subscribe((post) => {
      this.posts.unshift(post);
      alert('Post created');
      this.newPost = {} as Post;
    });
  }

  getPosts() {
    // this.posts = POSTS;
    this.loaded = false;
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    });
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
    this.postService.deletePost(id).subscribe(() => {
      console.log('deleted');
    });
  }

}
