/**
 * class for accepting the Jwt Response
 * @Florian Lang
 */
export class JwtResponse {
  accessToken: string;
  type: string;
  username: string;
  authorities: string[];
}
