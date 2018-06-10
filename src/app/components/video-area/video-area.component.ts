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
  videoUrl = '';
  videoFile;
  videoMaxSize = 4048;
  videoExists = false;
  safeURL;
  constructor(private _sanitizer: DomSanitizer) {}

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
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
        this.videoUrl
      );
      console.log(this.videoUrl);
      this.videoExists = true;
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
