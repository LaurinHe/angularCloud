import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { StationService} from '../../station.service';

@Component({
  selector: 'app-selector-data',
  templateUrl: './selector-data.component.html',
  styleUrls: ['./selector-data.component.css']
})
export class SelectorDataComponent implements OnInit {

  public selC;

  dataControl = new FormControl();

  dataList: string[] = ['Temperature', 'Precipitation', 'Snow', 'Wind'];

  constructor() {  }

  ngOnInit() {
  }

}
