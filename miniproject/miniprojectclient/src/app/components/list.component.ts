import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _list: Contact[] = []

  @Input()
  set list(l: Contact[]) {
    this.list = l
  }

  @Output()
  onDeleteItem = new Subject<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(idx: number) {
    console.log("::::: Index: ", idx)
    this.onDeleteItem.next(idx)
  }
1
}
