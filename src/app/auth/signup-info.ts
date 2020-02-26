/**
 * Class which includes the information for the sign up
 * @author Florian Lang
 */
export class SignUpInfo {
  name: string;
  username: string;
  password: string;
  secretquestone: string;
  secretquesttwo: string;

  constructor(name: string, username: string, password: string, secretquestone: string, secretquesttwo: string) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.secretquestone = secretquestone;
    this.secretquesttwo = secretquesttwo;
  }
}
