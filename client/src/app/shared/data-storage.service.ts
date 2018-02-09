import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProductService } from '../components/products/product.service';
import { Product } from '../components/products/product.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private productService: ProductService) {    }

    getProducts() {
        this.http.get('http://localhost:3000/api/products')
        .subscribe(
            (response: Response) => {
                const products: Product[] = response.json();
                console.log(products);
            }
        );
    }
}