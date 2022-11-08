import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router, private camSvc: CameraService) { }

  width!: number
  webcamImage = '/assets/dog.png'

  showWebcam!: boolean
  errors: WebcamInitError[] = [];

  snap = new Subject<void>();
  snapObs = this.snap.asObservable();

  ngOnInit(): void {
    this.width = Math.floor(window.innerWidth / 3)
  }

  toggleWebcam(): void {
    console.log(":::::Toggling Webcam ON/OFF")
    this.showWebcam = !this.showWebcam;
  }

  takeSnapshot(): void {
    console.log(":::::Snapshot Taken")
    this.snap.next();
  }

  handleImage(img: WebcamImage): void {
    console.log(':::::Image: ', img);
    this.webcamImage = img.imageAsDataUrl;
    this.camSvc.image = img.imageAsDataUrl;
    this.router.navigate([ '/upload' ]);
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

}
