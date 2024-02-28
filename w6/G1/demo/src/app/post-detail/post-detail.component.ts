import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {POSTS} from "../fake-db";
import {Post} from "../models";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post!: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const id = Number(params.get('id'));
        this.postService.getPost(id).subscribe((post) => {
          this.post = post;
        });
      }
    });
  }


}
