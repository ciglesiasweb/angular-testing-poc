import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../tasks.service';
import { trigger, transition, animate, style, query, keyframes } from '@angular/animations';


@Component({
  selector: 'app-task-list',
  template: `
  <div class="task-list-container"  @loadingAnimation>
    <div *ngFor='let task of tasks'>
      <div class="item">
        <app-task-panel [task]="task" ></app-task-panel>
      </div>
    </div>
  </div>
  `,
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [
        query('.item', [
          animate('0.5s', keyframes([
            style({ transform: 'translate(-2px, 0)', offset: 0.1 }),
            style({ transform: 'translate(2px, 0)', offset: 0.2 }),
            style({ transform: 'translate(-2px, 0)', offset: 0.3 }),
            style({ transform: 'translate(-2px, 0)', offset: 0.5 }),
            style({ transform: 'translate(-2px, 0)', offset: 0.7 }),
            style({ transform: 'translate(2px, 0)', offset: 0.8 }),
            style({ transform: 'translate(-2px, 0)', offset: 0.9 }),
          ]))

        ])
      ]),
    ])
  ],
  styles: []
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(taskService: TasksService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

}
