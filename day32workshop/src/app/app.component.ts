import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Order, orderDB } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  version: number = 0;

  processNewOrder(order: Order) {
      order.orderId = uuidv4().substring(0, 8)
      orderDB[order.orderId] = order
      this.version++
  }

}
