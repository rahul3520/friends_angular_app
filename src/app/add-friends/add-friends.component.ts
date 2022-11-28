import { Component } from '@angular/core';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {

  Name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues = () =>
  {

    let data:any=
    {
      "Name":this.Name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    
    }

    console.log(data);
    

  }
}
