import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {StationService} from '../../station.service';

@Component({
  selector: 'app-selector-station',
  templateUrl: './selector-station.component.html',
  styleUrls: ['./selector-station.component.css']
})
export class SelectorStationComponent implements OnInit {

  myControl = new FormControl();

  stations = [];

  filteredStations: Observable<string[]>;

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getStations()
      .subscribe(data => this.stations = data);

    this.filteredStations = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.stations.filter(option => option.toLowerCase().includes(filterValue));
  }

}
