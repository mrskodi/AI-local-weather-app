import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { IcurrentWeatherDisplay } from './icurrent-weather-display';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFakeApidataService implements IWeatherService{
  private fakeWeather: IcurrentWeatherDisplay = {
    city: 'seattle',
    country: 'us',
    date: 1485789600,
    description: 'sunny',
    image: '',
    temperature: 220,
  }
  constructor() { }

  public getCurrentWeather(city: string, country: string): Observable<IcurrentWeatherDisplay>{
    return of(this.fakeWeather);
  }
}
