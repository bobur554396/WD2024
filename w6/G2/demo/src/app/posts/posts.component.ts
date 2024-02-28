import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../models";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnDestroy {
  posts!: Post[];
  loaded: boolean = false;

  constructor(private postService: PostsService) {
  }
  ngOnInit() {
    this.loaded = false;
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    });
  }

  deletePost(id: number){
    this.posts = this.posts.filter((post) => post.id !== id);
    this.postService.deletePost(id).subscribe(() => {
      console.log('deleted');
    });
  }

  ngOnDestroy() {
  }


}
