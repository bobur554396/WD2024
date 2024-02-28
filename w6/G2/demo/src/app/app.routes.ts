import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PostsComponent} from "./posts/posts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'posts', component: PostsComponent, title: 'Posts'},
  {path: 'posts/:id', component: PostDetailComponent, title: 'Post detail'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];
