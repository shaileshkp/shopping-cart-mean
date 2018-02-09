import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker'

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductListItemComponent } from './components/products/product-list/product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AddToCartComponent } from './components/products/add-to-cart/add-to-cart.component';
import { EditItemComponent } from './components/cart/edit-item/edit-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartService } from './components/cart/cart.service';
import { AppRoutingModule } from './app.routing.module';
import { ProductIndexComponent } from './components/products/product-index/product-index.component';
import { ProductService } from './components/products/product.service';
import { DataStorageService } from './shared/data-storage.service';
import { LoginService } from './components/login/login.service';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    CartComponent,
    AddToCartComponent,
    EditItemComponent,
    CartItemComponent,
    ProductIndexComponent,
    LoginComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  entryComponents: [
    AddToCartComponent
  ],
  providers: [ CartService, ProductService, DataStorageService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
