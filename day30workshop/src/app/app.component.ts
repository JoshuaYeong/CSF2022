import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count = 0;
  selectedNumbers: number[] = [];
  selectedNumberText!: string;

  ngOnInit(): void {
    this.reset;
  }

  imageClicked(n: number) {
    console.info('>>>>>selected: ' + n);
    this.selectedNumbers.push(n);
    this.selectedNumberText = this.selectedNumbers.join(',');
  }

  reset() {
    this.count = Math.floor(Math.random() * 31);
    this.selectedNumberText = 'No selection yet';
  }
}
