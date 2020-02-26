import {IDataAll} from '../IDataAll';

/**
 * Class for implementing a IDataAll used for creation of a data entry
 * @author Florian Lang
 */
export class DataAll implements IDataAll {
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


  constructor(stationid: number, date: string, temperature: number, tempAttr: number,
              dewpoint: number, dewAttr: number, seaLevelPressure: number, slpAttr: number,
              stationPressure: number, stpAttr: number, visibility: number, visibAttr: number,
              windSpeed: number, wdspAtr: number, maxWindSpeed: number, gust: number, maxTemperature: number, maxAttr: string,
              minTemperature: number, minAttr: string, precipitation: number, prcpAttr: string, snowDepth: number, frshtt: number) {
    this.stationid = stationid;
    this.date = date;
    this.temperature = temperature;
    this.tempAttr = tempAttr;
    this.dewpoint = dewpoint;
    this.dewAttr = dewAttr;
    this.seaLevelPressure = seaLevelPressure;
    this.slpAttr = slpAttr;
    this.stationPressure = stationPressure;
    this.stpAttr = stpAttr;
    this.visibility = visibility;
    this.visibAttr = visibAttr;
    this.windSpeed = windSpeed;
    this.wdspAtr = wdspAtr;
    this.maxWindSpeed = maxWindSpeed;
    this.gust = gust;
    this.maxTemperature = maxTemperature;
    this.maxAttr = maxAttr;
    this.minTemperature = minTemperature;
    this.minAttr = minAttr;
    this.precipitation = precipitation;
    this.prcpAttr = prcpAttr;
    this.snowDepth = snowDepth;
    this.frshtt = frshtt;
  }

}
