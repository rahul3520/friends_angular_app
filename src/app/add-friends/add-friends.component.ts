import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  readValues = () =>
  {

    let data:any=
    {
      "name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend
    
    }

    console.log(data);

    this.api.addFriends(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status == "success")
        {

          alert("Friend data added successfully")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
          
        } 
        else 
        {
          
          alert("something went wrong")
        }
      }

      
    )
    

  }
}
