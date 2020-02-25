export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  secretanswerone: string;
  secretanswertwo: string;

  constructor(name: string, username: string, email: string, password: string, secretanswerone: string, secretanswertwo: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.secretanswerone = secretanswerone;
    this.secretanswertwo = secretanswertwo;
    this.role = ['user'];
  }
}
