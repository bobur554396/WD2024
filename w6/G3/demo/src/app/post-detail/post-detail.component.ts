import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Observable} from "rxjs";
import {POSTS} from "../fake-db";
import {Post} from "../models";
import {PostService} from "../post.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.route.paramMap.subscribe((params) => {
      const postId = Number(params.get('postId'));
      this.loaded = false;
      this.postService.getPost(postId).subscribe((post) => {
        this.post = post;
        this.loaded = true;
      });
      // this.post = POSTS.find((post) => post.id === postId) as Post;
    });
  }


}
