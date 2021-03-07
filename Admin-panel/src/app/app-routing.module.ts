import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LocationComponent } from './modules/locations/location/location.component';
import { LocationsComponent } from './modules/locations/locations.component';
import { QuestionsComponent } from './modules/questions/questions.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'question',
    component: QuestionsComponent
  }, {
    path: 'location',
    component: LocationsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
