import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from "./teams/teams.component";
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'teams', component: TeamsComponent
  },
  {
    path: 'teams/view/:id', component: ViewComponent
  },
  {
    path: '**', redirectTo: '/teams',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
