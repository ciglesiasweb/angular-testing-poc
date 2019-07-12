import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


import { Item } from './item';


const ITEMS: Item[] = [{
  type: 'success',
  name: 'This is an success alert',
  description: 'Hello bla bla bla bla bla'
}, {
  type: 'info',
  name: 'This is an info alert',
  description: 'Hello bla bla bla bla bla'
}, {
  type: 'warning',
  name: 'This is a warning alert',
}, {
  type: 'danger',
  name: 'This is a danger alert',
}, {
  type: 'primary',
  name: 'This is a primary alert',
}, {
  type: 'secondary',
  name: 'This is a secondary alert',
}, {
  type: 'light',
  name: 'This is a light alert',
}, {
  type: 'dark',
  name: 'This is a dark alert',
}
];

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS).pipe(delay(500));
  }


}
