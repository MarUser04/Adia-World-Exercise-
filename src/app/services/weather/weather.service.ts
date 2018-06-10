import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  // private apiUrl =
  //   'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=13d92141e647bcd955956b5edb050fd6';
  // apiKey = '524901&APPID=13d92141e647bcd955956b5edb050fd6';
  // url;

  constructor(private httpClient: HttpClient) {
    //this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getCurrentWeather(city): Observable<any> {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=bc06aa129debb7abddcee067c4bf32e3`
    );
  }

  // getWeather(city, code) {
  //   return this.httpClient.get(
  //     this.url + city + ',' + code + '&APPID=' + this.apiKey
  //   );
  // }
}
