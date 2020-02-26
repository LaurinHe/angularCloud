import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {IStation} from '../../Interfaces/IStation';
import {DataService} from '../../data.service';
import {BugReport} from '../../Interfaces/Classes/BugReport';

@Component({
  selector: 'app-bugreport',
  templateUrl: './bugreport.component.html',
  styleUrls: ['./bugreport.component.css']
})
export class BugreportComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) {

    this.bugForm = this.formBuilder.group({
      bugname: '',
      bugcontent: ''
    });
  }

  submitted = false;

  bugFormControl = new FormControl('', Validators.required);

  bugForm;

  ngOnInit() {
  }

  onSubmit(bugreport: BugReport) {
    this.submitted = true;

    this.dataService.postBugReport(bugreport)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.station = new IStation();
    console.log('Bug Report has been submitted');

    this.stationForm.reset();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
