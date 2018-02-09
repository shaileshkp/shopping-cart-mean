import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartItem } from '../../../shared/cart-item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: CartItem;
  qty: number;

  constructor( private cartService: CartService ) { }

  ngOnInit() {
  }
  onSelectCartItem() {
    this.cartService.cartItemSelected.emit(this.product);
  }
  onRemoveCartItem() {
    this.cartService.removeCartItem(this.product);
  }
}
