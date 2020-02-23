import { StationService } from '../station.service';
import { IStation } from '../Interfaces/IStation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-station',
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent implements OnInit {
/*
  station: IStation = new IStation();
  submitted = false;

  constructor(private stationsService: StationService,
              private router: Router) { }*/

  ngOnInit() {
  }

/*  newStation(): void {
    this.submitted = false;
    this.station = new IStation();
  }

  save() {
    this.stationsService.createStation(this.station)
      .subscribe(data => console.log(data), error => console.log(error));
    this.station = new IStation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/stations']);
  }*/
}
