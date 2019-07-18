import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Task {
  constructor(public id: number, public name: string) { }
}

const TASKS: Task[] = [
  new Task(1, 'Add new user '),
  new Task(2, 'Edit comment on reports'),
  new Task(3, 'Add stars'),
  new Task(4, 'Repeat meeting'),
  new Task(5, 'Start scrum sprint'),
  new Task(6, 'End report of June')
];

const FETCH_LATENCY = 0;

@Injectable()
export class TasksService implements OnDestroy {

  constructor() { console.log('TaskssService instance created.'); }
  ngOnDestroy() { console.log('TaskssService instance destroyed.'); }

  // getTasks(): Observable<Task[]>  {
  //   return of(TASKS).pipe(delay(FETCH_LATENCY));
  // }

  getTasks(): Task[]  {
    return TASKS;
  }

  getTask(id: number | string): Observable<Task> {
    const task$ = of(TASKS.find(task => task.id === +id));
    return task$.pipe(delay(FETCH_LATENCY));

  }
}
