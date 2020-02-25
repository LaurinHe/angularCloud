import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset.service';
import { IUser } from '../Interfaces/UserI';

/**
 * Class for the user management. Only admins can see this part. Users can be deleted
 * @author Laurin Hecken
 */
@Component({
  selector: 'app-user-manag',
  templateUrl: './user-manag.component.html',
  styleUrls: ['./user-manag.component.css']
})
export class UserManagComponent implements OnInit {

  public userList: IUser[] = [];

  public selUser: IUser;

  constructor(private userService: ResetService) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe(data => this.userList = data);
  }

  deleteButtonHandler(username: string) {
    this.userService.deleteUser(username)
      .subscribe();

  }

}
