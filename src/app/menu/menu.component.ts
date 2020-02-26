import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

/**
 * Class for the toolbar / menu in the top left corner. Used to navigate through the app
 * @author Laurin Hecken
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public roles: Array<string> = [];

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  buttonHandler() {
    this.roles = this.tokenStorageService.getAuthorities();
  }

}
