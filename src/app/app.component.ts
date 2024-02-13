import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
//  templateUrl: './app.component.html',
  template: `<p>teste</p>
  <router-outlet></router-outlet>`
})
export class AppComponent {
}
