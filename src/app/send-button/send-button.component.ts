import { Component, OnInit } from '@angular/core';
import {IStation} from '../Interfaces/IStation';
import {StationService} from '../station.service';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.css']
})
export class SendButtonComponent implements OnInit {

  selectedStation: IStation;
  selectedMinDate: string;
  selectedMaxDate: string;

  constructor(private stationService: StationService) { }

  getDataFromServer() {
    this.stationService.getData('?stationidpassed=' +
    this.selectedStation.id +
    '&frompoint=' +
    this.selectedMinDate +
    '&topoint=' +
    this.selectedMaxDate);
    console.log('?stationidpassed=' +
      this.selectedStation.id +
      '&frompoint=' +
      this.selectedMinDate +
      '&topoint=' +
      this.selectedMaxDate); ///////////////////
  }

  ngOnInit() {
    this.stationService.currentSelStation.subscribe(data => this.selectedStation = data);
    this.stationService.currentSelMinDate.subscribe(data => this.selectedMinDate = data);
    this.stationService.currentSelMaxDate.subscribe(data => this.selectedMaxDate = data);
  }

}
