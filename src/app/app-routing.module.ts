import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'contacts', component: ContactComponent},
  {path: 'works', component: WorksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
