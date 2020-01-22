import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-selector-station',
  templateUrl: './selector-station.component.html',
  styleUrls: ['./selector-station.component.css']
})
export class SelectorStationComponent implements OnInit {

  myControl = new FormControl();

  stations: string[] = ['Berlin', 'Paris', 'Munich', 'Bayreuth'];

  filteredStations: Observable<string[]>;

  constructor() { }

  ngOnInit() {
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
