import { StationService } from '../../station.service';
import { IStation } from '../../Interfaces/IStation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Station} from '../../Interfaces/Classes/Station';
import {FormBuilder} from '@angular/forms';


/**
 * Class for creating a Station
 * @author Florian Lang
 */
@Component({
  selector: 'app-create-station',
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent implements OnInit {

  station: IStation; // = new Station();
  submitted = false;

  stationForm;

  constructor(private stationService: StationService,
              private router: Router,
              private formBuilder: FormBuilder) {


      this.stationForm = this.formBuilder.group({
        id: 0,
        name: '',
        latitude: 0,
        longitude: 0,
        elevation: 0,
        state: '',
        gsnflag: '',
        hcncrnflag: '',
        wmoid: ''
      });
  }

  ngOnInit() {
  }

  save(stationCr: IStation) {
    this.stationService.createStation(stationCr)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.station = new IStation();
    console.log('Station has been submitted');

    this.stationForm.reset();
    this.gotoList();
  }

  onSubmit(stationCr: IStation) {
    this.submitted = true;
    this.stationService.currentSelCountry.subscribe(data => stationCr.state = data.countryid);
    stationCr.hcncrnflag = ' ';
    stationCr.gsnflag = ' ';
    stationCr.wmoid = ' ';
    this.save(stationCr);
  }

  gotoList() {
    this.router.navigate(['/stations']);
  }
}
