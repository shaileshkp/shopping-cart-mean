import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../product.model';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../../shared/cart-item.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  
  product: Product;
  status: boolean = false;
  total: number;
  qtyInput: number = 1;

  constructor(public thisDialogRef: MatDialogRef<AddToCartComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) {  }

  ngOnInit() {
    this.product = this.data;
    this.total = this.product.price * this.qtyInput;
  }
  
  changeQty(event: Event){
    if(this.qtyInput > 0 && this.qtyInput <= this.product.qty) {
      this.total = this.product.price * this.qtyInput;
      this.status = false;
    } else {
      this.status = true;
    }
  }

  onOkClick() {
    // let newCartItem = new CartItem(this.product._id, this.product.name, this.qtyInput, this.product.price, this.product.img);
    // super.cartService.addCartItem(newCartItem);
    if(!this.status){
      this.thisDialogRef.close(this.qtyInput);
    }
  }
  onCancleClick() {
    this.thisDialogRef.close('cancle');
  }
}
