import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks.service';

@Component({
  selector: 'app-task-panel',
  template: `
  <div class="task-panel">
    <p class="name">{{task.id}}</p>
    <p class="description">{{task.name}}</p>
  </div>
  `,
  styles: []
})
export class TaskPanelComponent implements OnInit {

  @Input() task: Task;
  constructor() { }

  ngOnInit() {
  }

}
