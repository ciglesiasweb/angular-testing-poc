import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <h2>Task List</h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
