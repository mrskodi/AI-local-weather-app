import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IApiData } from './iapi-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IcurrentWeatherDisplay } from './icurrent-weather-display';
import { IWeatherService } from './iweather-service';

@Injectable({
  providedIn: 'root'
})
export class GetAPIdataService implements IWeatherService{

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<IcurrentWeatherDisplay>{
    return this.httpClient.get<IApiData>(`${environment.baseURL}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.apiKey}`).pipe(map(data => this.transformToICurrentWeatherDisplay(data)));
  }

  private transformToICurrentWeatherDisplay(data: IApiData): IcurrentWeatherDisplay{
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFarenheit(data.main.temp),
      description: data.weather[0].description
      
    }
  }

  private convertKelvinToFarenheit(kelvin: number): number{
    return kelvin * 9 / 5 - 459.67;
  }
}
