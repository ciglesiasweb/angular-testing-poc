import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(mod => mod.TasksModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
