import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../../shared/cart-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @Input() selectedCartItem: CartItem;
  @Output() updatedQty = new EventEmitter<CartItem>();
  qty: number;

  constructor() { }

  ngOnInit() {
    this.qty = this.selectedCartItem.qty;
  }

  ngOnChanges() {
    this.qty = this.selectedCartItem.qty;
  }

  onChangeQty() {
    this.selectedCartItem.qty = this.qty;
    this.updatedQty.emit(this.selectedCartItem);
    console.log(this.selectedCartItem);
  }

}
