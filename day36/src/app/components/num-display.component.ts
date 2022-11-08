import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-num-display',
  templateUrl: './num-display.component.html',
  styleUrls: ['./num-display.component.css']
})
export class NumDisplayComponent implements OnInit {

  num!: number

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.num = this.activatedRoute.snapshot.params['num']
  }

}
