import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // animations: [
  //   trigger('fadeInOut', [
  //     state('void', style({
  //       opacity: 0
  //     })),
  //     transition('void <=> *', animate(1000)),
  //   ])
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timetableFront';
}
