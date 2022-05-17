import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheather-widget-main',
  templateUrl: './wheather-widget-main.component.html',
  styleUrls: ['./wheather-widget-main.component.css']
})
export class WheatherWidgetMainComponent implements OnInit {

  WeatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

  getWeatherData(){
    let data = JSON.parse('')
  }
}
