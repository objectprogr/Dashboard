import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes,RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FuelComponent } from './fuel/fuel.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'fuel', component: FuelComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    FuelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
