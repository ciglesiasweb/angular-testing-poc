import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';



const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      { path: '', component: TaskListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
