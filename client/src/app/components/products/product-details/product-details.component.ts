import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Product } from '../product.model';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../../shared/cart-item.model';
import { Params } from '@angular/router/src/shared';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  @Output() addToCartProduct = new EventEmitter<CartItem>();
  status: boolean = false;
  id: number;

  constructor(
     public dialog: MatDialog,
     public snackBar: MatSnackBar, 
     private productService: ProductService,      
     private cartService: CartService, 
     private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }

  ngOnChanges(){
    if(this.product.qty === 0) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddToCartComponent, {
      width: '400px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result > 0) {
        var newCartItem: CartItem = new CartItem(this.product._id,this.product.name, result, this.product.price, this.product.img);
        console.log(newCartItem);
        this.cartService.addCartItem(newCartItem);
        this.snackBar.open(result+" items added in cart.", "Got-it");
      }
    });
  }
}
