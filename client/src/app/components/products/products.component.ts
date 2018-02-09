import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  selectedCartProduct: Product;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // this.dataStorageService.getProducts();
      // this.selectedCartProduct = undefined;
  }

  onCartAdded(product: Product) {
    this.selectedCartProduct = product;
  }
}
