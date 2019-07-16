import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPanelComponent } from './task-panel.component';

describe('TaskPanelComponent', () => {
  let component: TaskPanelComponent;
  let fixture: ComponentFixture<TaskPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPanelComponent ]
    });
    fixture = TestBed.createComponent(TaskPanelComponent);
    component = fixture.componentInstance;
    component.task = {id: 1, name: 'test'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
