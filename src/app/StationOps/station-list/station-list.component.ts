import {BehaviorSubject, Observable} from 'rxjs';

import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {IStation} from '../../Interfaces/IStation';
import {StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

/**
 * Class for viewing the Stations
 * @author Florian Lang
 */

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  constructor(private stationService: StationService,
              private router: Router) {}
  stations: IStation[] = [];

  dataSourceStations = new MatTableDataSource<IStation>(this.stations);

  selectedCountry: ICountry;

  displayedColumns: string[] = ['select', 'position', 'name', 'latitude', 'longitude', 'elevation'];

  // For selecting row
  selection = new SelectionModel<IStation>(false, [this.stations[0]]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSourceStations.paginator = this.paginator;
  }

  getStationsForcountryFromServer() {
    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
    this.stationService.getStations(this.selectedCountry.countryid)
      .subscribe(data => {
        this.stations = data;
        this.dataSourceStations = new MatTableDataSource<IStation>(data);
        this.dataSourceStations.paginator = this.paginator;
      });
    console.log('fetched stations for countryid: ' + this.selectedCountry.countryid);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceStations.data.length;
    // tslint:disable-next-line:triple-equals
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceStations.data.forEach(row => this.selection.select(row));
  }

  edit(stationid: number) {
    this.router.navigate(['editstation', stationid]);
  }

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
