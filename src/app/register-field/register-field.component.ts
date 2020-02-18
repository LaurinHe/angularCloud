import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-field',
  templateUrl: './register-field.component.html',
  styleUrls: ['./register-field.component.css']
})
export class RegisterFieldComponent implements OnInit {

  public firstName = '';
  public lastName = '';
  public username = '';
  public password = '';
  public retypedPassword = '';

  constructor() { }

  ngOnInit() {
  }

}
