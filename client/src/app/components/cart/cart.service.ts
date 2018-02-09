import { EventEmitter } from '@angular/core';
import { CartItem } from '../../shared/cart-item.model';
import { Subject } from 'rxjs/Subject';

export class CartService {
    cartItemSelected = new EventEmitter<CartItem>();
    
    cartItemsChanged = new Subject<CartItem[]>();

    private cartItems: CartItem[] = [
        new CartItem('10', 'hp', 2, 22000, 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png'),
        new CartItem('11', 'dell', 1, 29000, 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png')
    ];

    
    getCartItems() {
        return this.cartItems.slice();
    }

    addCartItem(cartItem: CartItem) {
        this.cartItems.push(cartItem);
        this.cartItemsChanged.next(this.cartItems.slice());
    }

    removeCartItem(cartItem: CartItem) {
        let pos;
        let i = 0;
        this.cartItems.forEach(element => {
            if (cartItem.id === element.id) {
                pos = i;
            }
            i++;
        });
        this.cartItems.splice(pos, 1);
        this.cartItemsChanged.next(this.cartItems.slice());
    }
}
