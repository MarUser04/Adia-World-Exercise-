import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-video-area',
  templateUrl: './video-area.component.html',
  styleUrls: ['./video-area.component.css']
})
export class VideoAreaComponent {
  videoUrl;
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
    // const filesKeys = Object.keys(files);

    // filesKeys
    //   .filter((i, index) => index < 2)
    //   .filter(i => {
    //     const file = files[i];
    //     if (file.type.startsWith('video')) {
    //       return file;
    //     }
    //   })
    //   .forEach(n => {
    //     if (files[n].size / 1024 < this.videoMaxSize) {
    //       this._transformVideoAsDataUrl(files[n]);
    //     }
    //   });

    this.videoUrl = files.name;
  }

  // private _transformVideoAsDataUrl(file: File) {
  //   this.videoFile = file;
  //   this.readUploadedFileAsDataURL(file).then((video: string) => {
  //     this.videoUrl = video;
  //   });
  // }

  // private readUploadedFileAsDataURL = inputFile => {
  //   const temporaryFileReader = new FileReader();

  //   return new Promise((resolve, reject) => {
  //     if (!inputFile) {
  //       resolve(null);
  //     }

  //     temporaryFileReader.onerror = () => {
  //       temporaryFileReader.abort();
  //       reject(new Error('Problem parsing input file.'));
  //     };

  //     temporaryFileReader.onload = () => {
  //       resolve(temporaryFileReader.result);
  //     };
  //     temporaryFileReader.readAsDataURL(inputFile);
  //   });
  // }
}
