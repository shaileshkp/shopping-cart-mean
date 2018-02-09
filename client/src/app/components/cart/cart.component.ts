import { Component,DoCheck, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartItem } from '../../shared/cart-item.model';
import { CartService } from './cart.service';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, DoCheck {
  
  selectedCartItem: CartItem;
  selectedCartItemForRemove: CartItem;
  private subscription: Subscription;
  total: number;
  cartItems : CartItem[] ;

  constructor(public snackBar: MatSnackBar,
      private cartService: CartService,
      private loginService: LoginService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.subscription = this.cartService.cartItemsChanged
      .subscribe(
        (cartItems: CartItem[]) => {
          this.cartItems = cartItems;
        }
      );
    this.cartService.cartItemSelected
      .subscribe((cartItem:CartItem) => {
        this.selectedCartItem = cartItem;
      }
    );
    this.calculateTotal();
  }

  ngDoCheck() {
    this.calculateTotal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onUpdatedQty(event:Event) {
    this.selectedCartItem = undefined;
  }

  calculateTotal() {
    this.total = 0;
    this.cartItems.forEach(element => {
      this.total += (element.qty * element.amount);
    });
  }

  onPlaceOrder() {
    if(this.loginService.cUser === undefined) {
      this.snackBar.open("Please login for place the order.", "Got-it");
      console.log(this.loginService.currentUser);
    }
  }
}
