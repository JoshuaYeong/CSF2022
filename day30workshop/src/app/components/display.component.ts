import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  @Input()
  set count(n: number) {
    console.info('>>>> set: ', n);
    this._count = n;
    this.updateImage(n);
  }
  get count(): number {
    return this._count;
  }

  private _count = 0;

  @Output()
  onImageClicked = new Subject<number>();

  image!: string;
  // image = '/assets/number0.jpg';

  constructor() {}

  ngOnInit(): void {
    this.updateImage(this._count);
  }

  imageClicked() {
    console.info(`----- count: ${this._count}`);
    this.onImageClicked.next(this._count);
  }

  next() {
    this._count++;
    // this._count = this._count % 31
    this._count %= 31;
    this.updateImage(this._count);
  }

  prev() {
    this._count--;
    if (this._count < 0) {
      this._count = 30;
    }
    this.updateImage(this._count);
  }

  private updateImage(n: number) {
    console.info('>>> number: ', n);
    this.image = `/assets/number${n}.jpg`;
  }
}
