import {IStation} from '../IStation';

export class Station implements IStation{
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  state: string;
  gsnflag: string;
  hcncrnflag: string;
  wmoid: string;

  constructor(id: string, name: string, latitude: number, longitude: number, elevation: number, state: string) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.elevation = elevation;
    this.state = state;
    this.gsnflag = '';
    this.hcncrnflag = '';
    this.wmoid = '';
  }
}
