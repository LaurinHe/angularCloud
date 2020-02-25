import { Component, OnInit } from '@angular/core';

/**
 * Class for the login - only logged in users can use the website properly
 * @author Laurin Hecken & Florian Lang
 */
@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.css']
})
export class LoginFieldComponent implements OnInit {

  public username = '';
  public password = '';

  constructor() { }

  ngOnInit() {
  }

}
