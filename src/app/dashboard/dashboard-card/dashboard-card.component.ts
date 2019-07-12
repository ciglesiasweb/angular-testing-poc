import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-dashboard-card',
  template: `
    <div class="dashboard-card">
      <p class="name">{{item.name}}</p>
      <p class="description">{{item.description}}</p>
      <button aria-label="Close" class="close" type="button" (click)="closeMe()"><span aria-hidden="true">×</span></button>
    </div>
  `,
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input() item: Item;
  @Output() onclose = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  closeMe() { this.onclose.emit(this.item); }

}
