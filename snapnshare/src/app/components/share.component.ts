import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  imageData!: string
  imageWidth!: string
  form!: FormGroup

  constructor(private router: Router, private cameraSvc: CameraService,
      private fb: FormBuilder) { }

  ngOnInit(): void {
    if (!this.cameraSvc.dataUrl) {
      this.router.navigate(['/'])
      return
    }

    const w = Math.floor(window.innerWidth * .9)
    this.imageWidth = `${w}`

    this.imageData = this.cameraSvc.dataUrl

    this.form = this.fb.group({
      title: this.fb.control('', [ Validators.required ]),
      caption: this.fb.control('', [ Validators.required ]),
    })
  }

  shareIt() {
    console.info('>>>> data: ', this.form.value)
  }

}
