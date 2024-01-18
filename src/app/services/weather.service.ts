import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherApi = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) { }

  getWeather(latitude: string, longitude: string): Observable<Weather> {
    const apiUrl = `${this.weatherApi}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
    return this.http.get<Weather>(apiUrl);
  }
}
