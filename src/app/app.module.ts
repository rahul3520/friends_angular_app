import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewallFriendsComponent } from './viewall-friends/viewall-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    ViewallFriendsComponent,
    SearchFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
