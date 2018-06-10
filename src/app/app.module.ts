import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { VideoAreaComponent } from './components/video-area/video-area.component';
import { MainAreaComponent } from './components/main-area/main-area.component';
import { WeatherService } from './services/weather/weather.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, VideoAreaComponent, MainAreaComponent],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
