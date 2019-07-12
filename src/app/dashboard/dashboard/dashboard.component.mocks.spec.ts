import { TestBed } from '@angular/core/testing';
import { Item } from '../item';
import { DashboardComponent } from './dashboard.component';
import { ItemService } from '../item.service';
import { Observable, of } from 'rxjs';


const CARD_ITEMS: Item[] = [{
  id: 1,
  name: 'uno'
}, {
  id: 1,
  name: 'dos'
},
{
  id: 3,
  name: 'tres'
}];

class MockItemService {
  getItems(): Observable<Item[]> {
    const data: Item[] = [{
      id: 1,
      name: 'uno'
    }, {
      id: 1,
      name: 'dos'
    }];
    return of(data);
  }
}

describe('DashboardComponent mocking dependencies', () => {
  let comp;
  let itemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        DashboardComponent,
        { provide: ItemService, useClass: MockItemService }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(DashboardComponent);
    itemService = TestBed.get(ItemService);
  });

  it('should not items after construction', () => {
    expect(comp.items).toBeUndefined();
  });


  it('close method delete field items', () => {
    comp.items = CARD_ITEMS;
    comp.close(CARD_ITEMS[0]);
    expect(comp.items.length).toBe(2);
  });


});
