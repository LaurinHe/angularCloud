import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.css']
})
export class LoginFieldComponent implements OnInit {

  public username: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

}
