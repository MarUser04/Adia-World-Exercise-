import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-video-area',
  templateUrl: './video-area.component.html',
  styleUrls: ['./video-area.component.css']
})
export class VideoAreaComponent {
  videoUrl = 'http://static.videogular.com/assets/videos/videogular.ogg';
  videoFile;
  videoMaxSize = 4048;

  constructor() {}

  openFileBrowser(e, name) {
    e.preventDefault();

    const element: HTMLElement = document.getElementById(name) as HTMLElement;
    element.click();
  }

  onFileChangeVideos(e) {
    const { files } = e.target;
    console.log(files);
    // if (files.type.startsWith('video')) {
    this.readUploadedFileAsDataURL(files[0]).then((video: string) => {
      this.videoUrl = video;
      console.log(video);
    });
    // }
  }

  private readUploadedFileAsDataURL = inputFile => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      if (!inputFile) {
        resolve(null);
      }

      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new Error('Problem parsing input file.'));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };
}
