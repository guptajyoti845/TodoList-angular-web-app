import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CourseComponent} from './course.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FormsModule} from '@angular/forms';
import {FavComponent} from './fav/fav.component';
import {ProjectsComponent} from './projects/projects.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRouteModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    AboutComponent,
    FavComponent,
    ProjectsComponent,
    PersonDetailsComponent,
    PageNotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
