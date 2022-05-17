import { Observable } from 'rxjs';
import { WheatherApiService, WheatherData } from './../../shared/services/weather-api/wheather-api.service';
import { GeolocationService } from './../../shared/services/geolocation/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private geolocationService: GeolocationService,
    private wheatherApiService: WheatherApiService
  ) {}

  weather$?: Observable<WheatherData>;
  error = false;

  ngOnInit(): void {
    this.geolocationService.getPosition().subscribe({
      next: (coords) =>{
        this.weather$ = this.wheatherApiService.getWeatherData(coords);
      },
      error: (erro) =>{
        this.error = true;
      },
    });
  }
}
