export class ResetPwInfo {
  username: string;
  newpassword: string;
  secretanswerone: string;
  secretanswertwo: string;

  constructor(username: string, newpassword: string, secretanswerone: string, secretanswertwo: string) {
    this.username = username;
    this.newpassword = newpassword;
    this.secretanswerone = secretanswerone;
    this.secretanswertwo = secretanswertwo;
  }
}
