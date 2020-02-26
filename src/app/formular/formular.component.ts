import { Component, OnInit } from '@angular/core';
import { ResetPwInfo } from '../auth/resetpw-info';
import { ResetService } from '../reset.service';

/**
 * Class for the form, which has to be filled in order to reset the Password
 * @author Laurin Hecken
 */
@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {

  form: any = {};
  resetPwInfo: ResetPwInfo;
  myError: string;




  constructor(private resetService: ResetService) { }

  ngOnInit() { }

  /**
   * the resetService is subscribed
   * the user is informed if his password reset was successful
   * @author Laurin Hecken
   */
  onSubmit() {
    console.log(this.form);

    this.resetPwInfo = new ResetPwInfo(
      this.form.username,
      this.form.newpassword,
      this.form.answerquestone,
      this.form.answerquesttwo);

    this.resetService.resetpassword(this.resetPwInfo).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        this.myError = error.error.text;
      }
    );
  }
}
