import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-dashboard-title',
  template: `
    <h2  [@titleStatus]="status" class="dashboard-title">
      My Tasks...
    </h2>
  `,
  styles: [],
  animations: [
    trigger('titleStatus', [
      state('active', style({ opacity: 1 })),
      transition('* => active', [
        animate('2s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0.5, offset: 0.8 }),
          style({ opacity: 1, offset: 1.0 })
        ]))
      ]),
    ])

  ]
})
export class DashboardTitleComponent implements OnInit {

  status = 'active';
  constructor() {
  }

  ngOnInit() {
  }

}
