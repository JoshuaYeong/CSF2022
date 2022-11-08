import { Component, Input, OnInit } from '@angular/core';
import { orderDB } from '../models';

@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})
export class PoComponent implements OnInit {

  @Input()
  set version(n: number) {
    this.orderIds = []
    for (let k in orderDB) {
      this.orderIds.push(k)
    }
  }

  orderIds: string[] = []
  orders = orderDB

  constructor() { }

  ngOnInit(): void {
  }

}
