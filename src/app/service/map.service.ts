import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApartmentGeoLocations, IRecord } from '../models/map.models';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  url: string = 'https://app.smartapartmentdata.com/List/json/listItems.aspx?listID=8203159&token=8C1DE33BEA53704C6CA67855D9F4A638DF805F64&receipt=8C1DE33BEA53704C6CA67855D9F4A638DF805F64'

  constructor(private http: HttpClient) { }

  fetchMapPins(): Observable<IApartmentGeoLocations> {
    return this.http.get<IApartmentGeoLocations>(this.url);
  }
}
