import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a routerLink="" routerLinkActive="active">Dashboard</a>
      <a routerLink="tasks" routerLinkActive="active">Tasks</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'testing-suite';
}
