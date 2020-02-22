import { Component, OnInit } from '@angular/core';
import { IcurrentWeatherDisplay } from '../icurrent-weather-display';
import { GetAPIdataService } from '../get-apidata.service';
import { IWeatherService } from '../iweather-service';

@Component({
  selector: 'app-current-weather-display',
  templateUrl: './current-weather-display.component.html',
  styleUrls: ['./current-weather-display.component.css']
})

export class CurrentWeatherDisplayComponent implements OnInit {
  current: IcurrentWeatherDisplay;
  constructor(private getApidataService: GetAPIdataService) {}

  ngOnInit() {
    this.getApidataService.getCurrentWeather('Mill Creek', 'US').subscribe(data => this.current = data);
  }

}
