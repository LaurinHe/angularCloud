import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {IStation} from '../../Interfaces/IStation';
import {StationService} from '../../station.service';
import {ICountry} from '../../Interfaces/ICountry';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {IDataAll} from '../../Interfaces/IDataAll';

/**
 * Class for viewing the Data
 * @author Florian Lang
 */
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  constructor(private stationService: StationService,
              private router: Router,
              private sanitizer: DomSanitizer) {}
  givenData: IDataAll[] = [];

  downloadJson;

  dataSourceDailyEntries = new MatTableDataSource<IDataAll>(this.givenData);

  selectedCountry: ICountry;

  selectedStation: IStation;
  selectedMinDate: string;
  selectedMaxDate: string;

  displayedColumns: string[] = ['date', 'temperature', 'maxtemp', 'mintemp', 'precipitation'];

  // For selecting row
  selection = new SelectionModel<IDataAll>(false, [this.givenData[0]]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private theJSON: string;
  private uri: SafeUrl;
  isDownloadable = false;

  ngOnInit() {
    this.dataSourceDailyEntries.paginator = this.paginator;
    this.dataSourceDailyEntries.sort = this.sort;
  }

/*  getStationsForcountryFromServer() {
    this.stationService.currentSelCountry.subscribe(data => this.selectedCountry = data);
    this.stationService.getData(this.selectedStation.id, this.)
      .subscribe(data => {
        this.givenData = data;
        this.dataSourceDailyEntries = new MatTableDataSource<IStation>(data);
        this.dataSourceDailyEntries.paginator = this.paginator;
        this.dataSourceDailyEntries.sort = this.sort;

      });
    console.log('fetched stations for countryid: ' + this.selectedCountry.countryid);
  }*/

  getDataFromServer() {
    this.stationService.currentSelStation.subscribe(data => this.selectedStation = data);
    this.stationService.currentSelMinDate.subscribe(data => this.selectedMinDate = data);
    this.stationService.currentSelMaxDate.subscribe(data => this.selectedMaxDate = data);

    this.stationService.getData('?stationidpassed=' +
      this.selectedStation.id +
      '&frompoint=' +
      this.selectedMinDate +
      '&topoint=' +
      this.selectedMaxDate).subscribe(data => {
      this.givenData = data;
      this.dataSourceDailyEntries = new MatTableDataSource<IDataAll>(data);
      this.dataSourceDailyEntries.paginator = this.paginator;
      this.dataSourceDailyEntries.sort = this.sort;
    });


    console.log('?stationidpassed=' +
      this.selectedStation.id +
      '&frompoint=' +
      this.selectedMinDate +
      '&topoint=' +
      this.selectedMaxDate);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceDailyEntries.data.length;
    // tslint:disable-next-line:triple-equals
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceDailyEntries.data.forEach(row => this.selection.select(row));
  }

  edit(stationid: number) {
    this.router.navigate(['editstation', stationid]);
  }

  generateDownloadJsonUri() {
    this.theJSON = JSON.stringify(this.givenData);
    this.uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(this.theJSON));
    this.downloadJson = this.uri;
    console.log('Downloading Data as Json the first station is: ' + this.givenData[0].stationid + ' reachable at ' + this.uri);
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

}

