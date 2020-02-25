import { Component, OnInit } from '@angular/core';

/**
 * Class for the registration. Users can create a new account
 * @author Laurin Hecken
 */
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
  public safetyAnswer1 = '';
  public safetyAnswer2 = '';

  constructor() { }

  ngOnInit() {
  }

}
