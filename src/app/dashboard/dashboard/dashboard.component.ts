import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import {Item} from '../item';



@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <app-dashboard-title></app-dashboard-title>
      <div class="dashboard-cards">
        <app-dashboard-card (onclose)="close(item)" [item]="item" *ngFor="let item of items"></app-dashboard-card>
      </div>
    </div>
  `,

  styles: []
})
export class DashboardComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  close(item: Item) {
    console.log('closing');
    this.items.splice(this.items.indexOf(item), 1);
  }



}
