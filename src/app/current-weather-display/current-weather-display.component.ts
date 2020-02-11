import { Component, OnInit } from '@angular/core';
//import { Interface } from 'readline';
import { IcurrentWeatherDisplay } from '../icurrent-weather-display';

@Component({
  selector: 'app-current-weather-display',
  templateUrl: './current-weather-display.component.html',
  styleUrls: ['./current-weather-display.component.css']
})
export class CurrentWeatherDisplayComponent implements OnInit {
  current: IcurrentWeatherDisplay;
  constructor() { 
    this.current = {
      city: "Seattle",
      country: "US",
      date: 147890654,
      temperature: 40,
      description: 'Sunny',
      image:''
    } as IcurrentWeatherDisplay
  }

  ngOnInit(): void {
  }

}
