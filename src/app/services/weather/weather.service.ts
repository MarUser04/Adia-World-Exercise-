import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  apiKey = 'bc06aa129debb7abddcee067c4bf32e3'; // key for api connection

  constructor(private httpClient: HttpClient) {}

  // api request, get weather by city
  getCurrentWeather(city): Observable<any> {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        this.apiKey
      }`
    );
  }
}
