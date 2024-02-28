import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
