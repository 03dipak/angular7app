import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users:Object = [];
	//users: 'hello';
  constructor(private data: DataService) {
  	//users: Object;
   }

  ngOnInit() {
  	//console.log(this.data.getUsers());
  	this.data.getUsers().subscribe(
  			data => {
  				this.users=data;
  				// console.log(data);
  			}//console.log(data)
  		);
  	//var name: 'dipak'
  	/*console.log(this.data.getUsers().subscribe(
  			data => this.users = data
  		));*/
  	console.log("from "  + this.users);
  }

}
