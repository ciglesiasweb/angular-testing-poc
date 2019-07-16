import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksService } from './tasks.service';
import { TaskPanelComponent } from './task-panel/task-panel.component';

@NgModule({
  declarations: [TaskComponent, TaskListComponent, TaskPanelComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [TasksService]
})
export class TasksModule { }
