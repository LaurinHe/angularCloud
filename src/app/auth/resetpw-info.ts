export class ResetPwInfo {
  username: string;
  newpassword: string;
  answerquestone: string;
  answerquesttwo: string;

  constructor(username: string, newpassword: string, answerquestone: string, answerquesttwo: string) {
    this.username = username;
    this.newpassword = newpassword;
    this.answerquestone = answerquestone;
    this.answerquesttwo = answerquesttwo;
  }
}
