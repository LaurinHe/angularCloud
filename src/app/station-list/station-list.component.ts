

import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IStation} from '../Interfaces/IStation';
import {StationService} from '../station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations: Observable<IStation[]>;

  constructor(private stationService: StationService,
              private router: Router) {}

  ngOnInit() {
    // this.reloadData();
  }

 /* reloadData() {
    this.stations = this.stationService.getStationsList();
  }*/

  /*deleteStation(id: number) {
    this.stationService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }*/

  /*stationDetails(id: number) {
    this.router.navigate(['details', id]);
  }*/
}
