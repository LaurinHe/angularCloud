/**
 * Class for storing the form for the bugreport
 * @author Florian Lang
 */
export class BugReport {
  bugname: string;
  bugcontent: string;

  constructor(bugname: string, bugcontent: string) {
    this.bugname = bugname;
    this.bugcontent = bugcontent;
  }

}
