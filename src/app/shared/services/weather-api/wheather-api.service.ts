import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface WheatherData {
  main:{
    temp: number;
    temp_min: number;
    temp_max: number;
  };
}
@Injectable({
  providedIn: 'root',
})
export class WheatherApiService {
  constructor(private http: HttpClient) {}
  apiKey = '9632bd297896f58b2834b51d19097739';
  baseUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br';

  getWeatherData(coords: GeolocationCoordinates): Observable<WheatherData> {
    return this.http.get<WheatherData>(this.baseUrl, {
      params: {
        lat: coords.latitude,
        lon: coords.longitude,
        appid: this.apiKey,
      },
    });
  }
}
