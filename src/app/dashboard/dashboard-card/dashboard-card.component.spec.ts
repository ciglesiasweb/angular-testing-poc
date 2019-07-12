
import { TestBed, ComponentFixture, fakeAsync, tick  } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
import { DashboardCardComponent } from './dashboard-card.component';
import { Item } from '../item';

describe('DashboardCardComponent. has proper css and data', () => {

  let fixture: ComponentFixture <DashboardCardComponent>;
  let comp: DashboardCardComponent;
  let nameDe: DebugElement;
  let nameEl: any;

  const expectedItem: Item = { id: 42, name: 'Test' };


  beforeEach(() => {

    TestBed.configureTestingModule({
     declarations: [DashboardCardComponent]
    });

    fixture = TestBed.createComponent(DashboardCardComponent);
    comp    = fixture.componentInstance;
    comp.item = expectedItem;
    nameDe  = fixture.debugElement.query(By.css('.name'));
    nameEl = nameDe.nativeElement;
    fixture.detectChanges();

  });

  it('should display name', () => {
    expect(nameEl.textContent).toContain(expectedItem.name);
  });

  it('tests the exit button click emit data with the item data', fakeAsync(() => {
    comp.closeMe();
    comp.onclose.subscribe( (data) => {
      expect(data.id).toBe(42);
    });
    tick(600);
    fixture.detectChanges();
  }));

  it('tests the exit button add the remove-effect css class', fakeAsync(() => {
    comp.closeMe();
    tick(600);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      console.log('fixture is stable. Lets test some html');
      const testCssSelector = fixture.debugElement.query(By.css('.remove-effect'));
      expect(testCssSelector).toBeDefined();
    });
  }));

});
