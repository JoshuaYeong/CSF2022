import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit, OnDestroy {

  num = 0
  sub$!: Subscription

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('::::: In ngOnInit: ', this.activatedRoute.snapshot.params['num'])
    if(this.activatedRoute.snapshot.params['num'])
      //if snapshot is used, it takes the current state/value --one-time use
      this.num = this.activatedRoute.snapshot.params['num']

      //transition from same route (NumberComponent) to same route (NumberComponent) but template value is different
      this.activatedRoute.params.subscribe(v => {
        console.log(':::::SUBSCRIBE: ', v)
        this.num = v['num']
      })
  }

  ngOnDestroy(): void {

  }

}
