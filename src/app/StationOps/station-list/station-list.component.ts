import {BehaviorSubject, Observable} from 'rxjs';

import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {IStation} from '../../Interfaces/IStation';
import {StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

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
              private router: Router,
              private sanitizer: DomSanitizer) {}
  stations: IStation[] = [];

  downloadJson;

  dataSourceStations = new MatTableDataSource<IStation>(this.stations);

  selectedCountry: ICountry;

  displayedColumns: string[] = ['select', 'position', 'name', 'latitude', 'longitude', 'elevation'];

  // For selecting row
  selection = new SelectionModel<IStation>(false, [this.stations[0]]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private theJSON: string;
  private uri: SafeUrl;
  isDownloadable = false;

  ngOnInit() {
    this.dataSourceStations.paginator = this.paginator;
    this.dataSourceStations.sort = this.sort;
  }

  getStationsForcountryFromServer() {
    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
    this.stationService.getStations(this.selectedCountry.countryid)
      .subscribe(data => {
        this.stations = data;
        this.dataSourceStations = new MatTableDataSource<IStation>(data);
        this.dataSourceStations.paginator = this.paginator;
        this.dataSourceStations.sort = this.sort;

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

  generateDownloadJsonUri() {
    this.theJSON = JSON.stringify(this.stations);
    this.uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(this.theJSON));
    this.downloadJson = this.uri;
    console.log('Downloading Data as Json the first station is: ' + this.stations[0].name + ' reachable at ' + this.uri);
    this.isDownloadable = true;
  }

  downloadJsonToDoc(myJson) {
    const sJson = JSON.stringify(myJson);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(sJson));
    element.setAttribute('download', 'primer-server-task.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
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
