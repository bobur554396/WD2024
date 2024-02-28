import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {RouterModule} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnDestroy {
  posts!: Post[];

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }


  ngOnDestroy() {
  }
}
