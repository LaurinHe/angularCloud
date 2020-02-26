/**
 * This class is for sending the authentication information to the backend
 * @author Florian Lang
 */
export class AuthLoginInfo {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
