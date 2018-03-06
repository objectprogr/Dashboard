import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Routes,RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
