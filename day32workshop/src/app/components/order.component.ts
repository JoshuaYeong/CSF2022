import { outputAst } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { LineItem, Order } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, OnChanges {

  @Input()
  order!: Order

  @Output()
  onNewOrder = new Subject<Order>();
  
  _order!: Order
  orderForm!: FormGroup;
  lineItems!: FormArray;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // @ts-ignore
    this.orderForm = this.createOrder(this.order);
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.orderForm?.dirty && !confirm('You have not saved your current edits. Discard?')) {
        this.order = this._order
        return 
      }

      this.orderForm = this.createOrder(this.order)
      this._order = this.order
  }

  processForm() {
    const order: Order = this.orderForm.value as Order;
    this.orderForm = this.createOrder();
    console.info('>>>> order: ', order);
    this.onNewOrder.next(order);
  }

  hasError(ctrlName: string) {
    return this.orderForm.get(ctrlName)?.hasError('required');
  }

  addItem() {
    this.lineItems.push(this.createLineItem());
  }

  removeItem(idx: number) {
    this.lineItems.removeAt(idx);
  }

  createOrder(): FormGroup {
    this.lineItems = this.fb.array([]);
    return this.fb.group({
      name: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      mobile: this.fb.control<string>('', [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
      lineItems: this.lineItems,
    });
  }

  createLineItem(): FormGroup {
    return this.fb.group({
      item: this.fb.control<string>('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      quantity: this.fb.control<number>(1, [
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  createLineItems(items: LineItem[] = []): FormArray {
    //return this.fb.array(items.map(li => this.createLineItem(li)))
    return this.fb.array([]);
  }
}
