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

describe('DashboardComponent whit Spies', () => {
  let comp;
  let itemServiceSpy: jasmine.SpyObj<ItemService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ItemService', ['getItems']);
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        DashboardComponent,
        { provide: ItemService, useValue: spy }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.get(DashboardComponent);
    itemServiceSpy = TestBed.get(ItemService);
    itemServiceSpy.getItems.and.returnValue(of(CARD_ITEMS));
  });

  it('should not items after construction', () => {
    expect(comp.items).toBeUndefined();
  });

  it('should call itemsService.getItems, initialize comp.items after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    console.log('items', comp.items);
    expect(itemServiceSpy.getItems.calls.count())
      .toBe(1, 'spy method was called once');
  });

  it('close method delete field items', () => {
    comp.items = CARD_ITEMS;
    comp.close(CARD_ITEMS[0]);
    expect(comp.items.length).toBe(2);
  });


});
