import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewallFriendsComponent } from './viewall-friends/viewall-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"view",
    component:ViewallFriendsComponent
  },
  {
    path:"search",
    component:SearchFriendsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    ViewallFriendsComponent,
    SearchFriendsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
