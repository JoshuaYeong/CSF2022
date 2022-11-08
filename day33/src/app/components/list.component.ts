import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  todos: Todo[] = []

  //Angular convention to end any subscription with a '$'
  sub$!: Subscription

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    // this.sub$ = this.todoSvc.onNewData.subscribe(this.processData)
    this.sub$ = this.todoSvc.onNewData.subscribe(data => {
      console.log('::::: subcription: ', data)
      this.todos = data
    })
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe()
  }

  //$event
  processData(data: Todo[]) {
    this.todos = data
  }

}
