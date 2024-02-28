import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Post} from "../models";
import {POSTS} from "../fake-db";
import {PostsService} from "../posts.service";
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
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('id')) {
        const postId = Number(params.get('id'));
        this.loaded = false;
        this.postService.getPost(postId).subscribe((post) => {
          this.post = post;
          this.loaded = true;
        });
        // this.post = POSTS.find((p) => p.id === postId) as Post;
      }
    });
  }


}
