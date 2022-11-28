import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friends',
  templateUrl: './search-friends.component.html',
  styleUrls: ['./search-friends.component.css']
})
export class SearchFriendsComponent {

  friendName=""

  readValues=() =>
  {
    let data:any=
    {
      "friendName":this.friendName
    }

    console.log(data)
  }

}
