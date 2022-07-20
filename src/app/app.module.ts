import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    TeamsComponent,
    ContactComponent,
    WorksComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
