import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset.service';
import { IUser } from '../Interfaces/UserI';

@Component({
  selector: 'app-user-manag',
  templateUrl: './user-manag.component.html',
  styleUrls: ['./user-manag.component.css']
})
export class UserManagComponent implements OnInit {

  public userList = [];

  public selUser: IUser;

  constructor(private userService: ResetService) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe(data => this.userList = data);
  }

  deleteButtonHandler(id: string) {
    this.userService.deleteUser(id)
      .subscribe();

  }

}
