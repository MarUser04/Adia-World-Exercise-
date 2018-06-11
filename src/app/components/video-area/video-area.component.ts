import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-area',
  templateUrl: './video-area.component.html',
  styleUrls: ['./video-area.component.css']
})
export class VideoAreaComponent {
  videoUrl: string;
  videoFile;
  videoMaxSize = 4048;
  videoExists = false;
  safeURL;
  constructor(private _sanitizer: DomSanitizer) {}

  // method for file selection
  openFileBrowser(e, name) {
    e.preventDefault();

    const element: HTMLElement = document.getElementById(name) as HTMLElement;
    element.click();
  }

  // method to get the file url
  onFileVideo(e) {
    const { files } = e.target;
    if (files[0].type.startsWith('video')) {
      this.readUploadedFileAsDataURL(files[0]).then((video: string) => {
        this.videoUrl = video;
        this.videoExists = true;
      });
    }
  }

  // convert file to base64
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
