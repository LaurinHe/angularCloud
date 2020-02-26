import {Timestamp} from 'rxjs';

export interface IDataAll {
  stationid: number;
  date: string;
  temperature: number;
  tempAttr: number;
  dewpoint: number;
  dewAttr: number;
  seaLevelPressure: number;
  slpAttr: number;
  stationPressure: number;
  stpAttr: number;
  visibility: number;
  visibAttr: number;
  windSpeed: number;
  wdspAtr: number;
  maxWindSpeed: number;
  gust: number;
  maxTemperature: number;
  maxAttr: string;
  minTemperature: number;
  minAttr: string;
  precipitation: number;
  prcpAttr: string;
  snowDepth: number;
  frshtt: number;
}
