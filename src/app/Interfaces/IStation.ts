/**
 * Interface for a station
 * @author Laurin Hecken
 */
export interface IStation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  state: string;
  gsnflag: string;
  hcncrnflag: string;
  wmoid: string;
}
