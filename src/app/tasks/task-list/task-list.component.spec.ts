import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { Task, TasksService } from '../tasks.service';

const TASKS: Task[] =  [{
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
describe('TaskListComponent with spies', () => {
  let comp: TaskListComponent;
  let tasksServiceSpy: jasmine.SpyObj<TasksService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('TasksService', ['getTasks']);
    TestBed.configureTestingModule({
      providers: [ TaskListComponent,
        { provide: TasksService, useValue: spy } ]
    });
    tasksServiceSpy = TestBed.get(TasksService);
    tasksServiceSpy.getTasks.and.returnValue(TASKS);
    comp = TestBed.get(TaskListComponent);
  });

  it('should create', () => {
    expect(comp).toBeDefined();
  });

  it('should has taks as taskServie.getTasks', () => {
    // comp.ngOnInit();
    expect(comp.tasks.length).toBe(TASKS.length);
  });
});
