import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppComponent } from './app.component';
import { VideoAreaComponent } from './components/video-area/video-area.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoAreaComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
