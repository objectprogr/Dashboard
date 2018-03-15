import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes,RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FuelComponent } from './fuel/fuel.component';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FuelDetailComponent } from './fuel-detail/fuel-detail.component';
import { GithubComponent } from './github/github.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fuel', component: FuelComponent },
  { path: 'fuel/:id', component: FuelDetailComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'github', component: GithubComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    FuelComponent,
    FuelDetailComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    NgxPaginationModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
