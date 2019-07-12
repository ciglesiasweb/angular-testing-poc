import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-dashboard></app-dashboard>
  <router-outlet></router-outlet>
`,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-suite';
}
