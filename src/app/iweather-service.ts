import { Observable } from 'rxjs';
import { IApiData } from './iapi-data';
import { IcurrentWeatherDisplay } from './icurrent-weather-display';

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<IcurrentWeatherDisplay>
}
