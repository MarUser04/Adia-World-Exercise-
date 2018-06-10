import { Component, OnInit } from '@angular/core';
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

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather().subscribe(resp => {
      console.log(resp);
      this.currentWeather = resp;
      this.temp_c = this.currentWeather.main.temp - 273.15;
      this.temp_c = this.temp_c.toFixed(2);
      this.temp_f = 1.8 * (this.currentWeather.main.temp - 273.15) + 32;
      this.temp_f = this.temp_f.toFixed(2);
    });
  }
}
