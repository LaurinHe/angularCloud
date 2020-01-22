import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-country',
  templateUrl: './selector-country.component.html',
  styleUrls: ['./selector-country.component.css']
})
export class SelectorCountryComponent implements OnInit {

  public countries = ['Germany', 'France', 'USA', 'Denmark', 'Netherlands'];

  constructor() { }

  ngOnInit() {
  }

}
