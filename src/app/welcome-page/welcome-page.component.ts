import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

}
