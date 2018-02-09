import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Product } from './product.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {environment} from './../../../environments/environment';

@Injectable()
export class ProductService {
    products: Product[] = [];
    url: string="";
    constructor(private http: Http) {
        this.url = environment.production ? '':'http://localhost:3000';
        console.log(this.url);
    }

    getProducts() {
        return this.http.get(this.url+'/api/products')
        .map(
            (response: Response) => {
                const products = response.json();
                this.products = products;
                return products;
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong');
            }
        );
        
        // return this.products.slice();
    }
    getProduct(index: number) {
        return this.products[index];
    }
}
