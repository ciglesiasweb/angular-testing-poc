
import { TestBed, ComponentFixture,  } from '@angular/core/testing';
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



});
