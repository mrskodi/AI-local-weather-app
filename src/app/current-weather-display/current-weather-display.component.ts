import { Component, OnInit } from '@angular/core';
//import { Interface } from 'readline';
import { IcurrentWeatherDisplay } from '../icurrent-weather-display';
import { GetAPIdataService } from '../get-apidata.service';

@Component({
  selector: 'app-current-weather-display',
  templateUrl: './current-weather-display.component.html',
  styleUrls: ['./current-weather-display.component.css']
})
export class CurrentWeatherDisplayComponent implements OnInit {
  current: IcurrentWeatherDisplay;
  constructor(private getApidataService: GetAPIdataService) {}

  ngOnInit(): void {
    this.getApidataService.getCurrentWeather('Seattle', 'US').subscribe(data => this.current = data);
  }

}
