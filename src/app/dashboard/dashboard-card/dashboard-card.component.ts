import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-dashboard-card',
  template: `
    <div class="dashboard-card shake-effect" [ngClass]="cssClass">
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
  cssClass: string;

  constructor() { }

  ngOnInit() {
  }

  closeMe() {
    this.cssClass = 'remove-effect';
    setTimeout(
      () => {
        this.onclose.emit(this.item);
      }, 550
    );
  }

}
