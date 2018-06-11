import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  AbstractControl
} from '@angular/forms';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import * as geoTz from 'geo-tz';

import { WeatherService } from '../../services/weather/weather.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  currentWeather;
  temp_c;
  temp_f;
  showDialog = false;
  f: FormGroup;
  clock; // City local time
  timezone;

  constructor(
    private weatherService: WeatherService,
    private builder: FormBuilder
  ) {
    this.f = this.builder.group({
      city: ['', Validators.required]
    });
    this.weatherService.getCurrentWeather('London').subscribe(resp => {
      this.currentWeather = resp;
      this.temp_c = this.currentWeather.main.temp - 273.15;
      this.temp_c = this.temp_c.toFixed(2);
      this.temp_f = 1.8 * (this.currentWeather.main.temp - 273.15) + 32;
      this.temp_f = this.temp_f.toFixed(2);

      // coordinates to get the timezone
      this.timezone = geoTz(
        this.currentWeather.coord.lat,
        this.currentWeather.coord.lon
      );
      setInterval(() => {
        this.clock = momentTimezone()
          .tz(this.timezone)
          .format('HH:mm');
      }, 1000);
    });
  }

  ngOnInit() {}

  // method that updates the city, the weather and time
  updateCity() {
    const city = this.f.get('city').value;
    this.weatherService.getCurrentWeather(city).subscribe(resp => {
      this.currentWeather = resp;
      this.temp_c = this.currentWeather.main.temp - 273.15;
      this.temp_c = this.temp_c.toFixed(2);
      this.temp_f = 1.8 * (this.currentWeather.main.temp - 273.15) + 32;
      this.temp_f = this.temp_f.toFixed(2);
      this.timezone = geoTz(
        this.currentWeather.coord.lat,
        this.currentWeather.coord.lon
      );
    });
    this.showDialog = !this.showDialog;
  }
}
