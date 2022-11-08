import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-list',
  templateUrl: './num-list.component.html',
  styleUrls: ['./num-list.component.css']
})
export class NumListComponent implements OnInit {

  nums: number[] = []

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 31; i++){
      this.nums.push(i)
    }
  }

}
