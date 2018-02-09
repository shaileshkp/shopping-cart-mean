webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard{\n    margin: auto;\n    width: 80%;\n    margin-top: 8px;\n}\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n      <app-nav-bar (selectedTabName)=\"onNavigate($event)\"></app-nav-bar>\n  </div>\n  <div class=\"main\">\n    <div class=\"dashboard\">\n      <router-outlet></router-outlet>\n        <!-- <app-products *ngIf=\"selectedTab === 'home'\"></app-products>\n        <app-cart *ngIf=\"selectedTab === 'cart'\"></app-cart> -->\n    </div>\n  </div>\n  <div>\n    <button (click)=\"showNotification()\">Show notification</button>    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.title = 'app';
        this.selectedTab = 'home';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loginService.onLoad();
    };
    AppComponent.prototype.displayConformNotification = function () {
    };
    AppComponent.prototype.onNavigate = function (tabName) {
        this.selectedTab = tabName;
    };
    AppComponent.prototype.showNotification = function () {
        Notification.requestPermission(function (result) {
            console.log('user choice', result);
            if (result !== 'granted') {
                console.log('No notificaiton purmission');
            }
            else {
                var options = {
                    body: "New Notificaiton.",
                    icon: "favicon.ico"
                };
                new Notification("Notificaiton", options);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_login_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_products_products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/components/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_products_product_list_product_list_item_product_list_item_component__ = __webpack_require__("../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_products_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/components/products/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_products_add_to_cart_add_to_cart_component__ = __webpack_require__("../../../../../src/app/components/products/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cart_edit_item_edit_item_component__ = __webpack_require__("../../../../../src/app/components/cart/edit-item/edit-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_item_cart_item_component__ = __webpack_require__("../../../../../src/app/components/cart/cart-item/cart-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cart_cart_service__ = __webpack_require__("../../../../../src/app/components/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_products_product_index_product_index_component__ = __webpack_require__("../../../../../src/app/components/products/product-index/product-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_products_product_service__ = __webpack_require__("../../../../../src/app/components/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/login/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_login_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_products_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_products_product_list_product_list_item_product_list_item_component__["a" /* ProductListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_products_product_details_product_details_component__["a" /* ProductDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_products_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cart_edit_item_edit_item_component__["a" /* EditItemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_cart_cart_item_cart_item_component__["a" /* CartItemComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_products_product_index_product_index_component__["a" /* ProductIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_login_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_login_signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js') : []
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__components_products_add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__components_cart_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_21__components_products_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_22__shared_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_23__components_login_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_products_product_index_product_index_component__ = __webpack_require__("../../../../../src/app/components/products/product-index/product-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_products_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/components/products/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__components_products_products_component__["a" /* ProductsComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_products_product_index_product_index_component__["a" /* ProductIndexComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__components_products_product_details_product_details_component__["a" /* ProductDetailsComponent */] }
        ] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_4__components_cart_cart_component__["a" /* CartComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart-item/cart-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pro-name {\n    color: blue;\n}\n\n\nh5 {\n    display: inline;\n}\n\n\n.cart-item-remove {\n    display: inline-block;\n    background: red;\n    color: white;\n    font-size: 16px;\n    font-family: sans-serif;\n    border: 2px solid;\n    border-radius: 4px;\n}\n\n\n.cart-item-remove:hover {\n    display: inline-block;\n    background: rgb(233, 87, 87);\n    color: white;\n    font-size: 18px;\n    font-family: sans-serif;\n    border: 2px solid;\n    border-radius: 4px;\n}\n\n\n.list-item-div {\n    padding: 8px;\n    margin-bottom: 8px;\n}\n\n\n.list-item-div:hover {\n    background: rgb(192, 191, 191);\n}\n\n\n.img-div {\n    display: inline-block;\n    float: left;\n}\n\n\n.details-div{\n    display: inline-block;\n}\n\n\n.pro-name{\n    margin: 4px;\n}\n\n\n.price-list-item {\n    font-size: 14px;\n}\n\n\n.total-amount-list-item {\n    display: inline-block;\n    float:right;\n    margin-right: 10px;\n}\n\n\n.total-amount-list-item > h4 {\n    margin-top: 10px;\n    font-size: 18px;\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart-item/cart-item.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"list-item-div\" (click)=\"onSelectCartItem()\">\n  <div class=\"img-div\">\n    <img src=\"{{product.img}}\"\n      height=\"50px\" width=\"50px\"/>\n  </div>\n\n  <div class=\"details-div\">\n    <h3 class=\"pro-name\">{{product.name}}</h3>\n    <h5 class=\"price-list-item\">Price : {{product.amount}}</h5>\n    <span class=\"qty-list-item\">Qty : <h5>{{product.qty}}</h5></span>\n  </div>\n  <div class=\"total-amount-list-item\">\n    <h4>{{product.amount * product.qty}}</h4>\n    <button mat-raised-button color=\"warn\" (click)=\"onRemoveCartItem()\">Remove</button>\n  </div>  \n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart-item/cart-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__ = __webpack_require__("../../../../../src/app/shared/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../src/app/components/cart/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(cartService) {
        this.cartService = cartService;
    }
    CartItemComponent.prototype.ngOnInit = function () {
    };
    CartItemComponent.prototype.onSelectCartItem = function () {
        this.cartService.cartItemSelected.emit(this.product);
    };
    CartItemComponent.prototype.onRemoveCartItem = function () {
        this.cartService.removeCartItem(this.product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__["a" /* CartItem */])
    ], CartItemComponent.prototype, "product", void 0);
    CartItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart-item',
            template: __webpack_require__("../../../../../src/app/components/cart/cart-item/cart-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart-item/cart-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\n    margin: 2px;\n}\n\n/* div > h3 {\n    display: inline-block;\n} */\n\n.order-now{\n    font-size: 16px;\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h2>Carts</h2>\n  </div>\n  <div>\n    <app-edit-item\n      *ngIf=\"selectedCartItem;\"\n      [selectedCartItem]=\"selectedCartItem\"\n      (updatedQty) = \"onUpdatedQty($event)\"\n      ></app-edit-item>\n  </div>\n  <div>\n    <h4>Added products in cart</h4>\n    <app-cart-item\n    *ngFor=\"let product of cartItems\"\n    [product]=\"product\"></app-cart-item>\n  </div>\n  <div style=\"text-align:center;\">\n    <h3> Total : {{total}} </h3>\n    <button mat-raised-button color=\"primary\" class=\"order-now\" (click)=\"onPlaceOrder()\">Place My Order</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../src/app/components/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(snackBar, cartService, loginService) {
        this.snackBar = snackBar;
        this.cartService = cartService;
        this.loginService = loginService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems = this.cartService.getCartItems();
        this.subscription = this.cartService.cartItemsChanged
            .subscribe(function (cartItems) {
            _this.cartItems = cartItems;
        });
        this.cartService.cartItemSelected
            .subscribe(function (cartItem) {
            _this.selectedCartItem = cartItem;
        });
        this.calculateTotal();
    };
    CartComponent.prototype.ngDoCheck = function () {
        this.calculateTotal();
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CartComponent.prototype.onUpdatedQty = function (event) {
        this.selectedCartItem = undefined;
    };
    CartComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.cartItems.forEach(function (element) {
            _this.total += (element.qty * element.amount);
        });
    };
    CartComponent.prototype.onPlaceOrder = function () {
        if (this.loginService.cUser === undefined) {
            this.snackBar.open("Please login for place the order.", "Got-it");
            console.log(this.loginService.currentUser);
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__ = __webpack_require__("../../../../../src/app/shared/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");



var CartService = /** @class */ (function () {
    function CartService() {
        this.cartItemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cartItemsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.cartItems = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__["a" /* CartItem */]('10', 'hp', 2, 22000, 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png'),
            new __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__["a" /* CartItem */]('11', 'dell', 1, 29000, 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05504697.png')
        ];
    }
    CartService.prototype.getCartItems = function () {
        return this.cartItems.slice();
    };
    CartService.prototype.addCartItem = function (cartItem) {
        this.cartItems.push(cartItem);
        this.cartItemsChanged.next(this.cartItems.slice());
    };
    CartService.prototype.removeCartItem = function (cartItem) {
        var pos;
        var i = 0;
        this.cartItems.forEach(function (element) {
            if (cartItem.id === element.id) {
                pos = i;
            }
            i++;
        });
        this.cartItems.splice(pos, 1);
        this.cartItemsChanged.next(this.cartItems.slice());
    };
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/components/cart/edit-item/edit-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-cart-item {\n    border: 1px solid blue;\n    margin-bottom: 20px;\n    height: 50px;\n}\n.basic-details {\n    display: inline;\n    float: left;\n}\n.edit-details {\n    margin-top: 12px;\n    margin-right: 8px;\n    display: inline;\n    float: right;\n}\n.submit-item {\n    font-size: 16px;\n    color: green;\n    height: 30px;\n    width: 70px;\n}\n#edit-qty {\n    font-size: 16px;\n    margin-left: 12px;\n    width: 50px;\n    text-align: center;\n}\ndiv > h3, h4 {\n    margin: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/edit-item/edit-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-cart-item\">\n  <div class=\"basic-details\">\n      <h3>{{selectedCartItem.name}}</h3>\n      <h4>Price: {{selectedCartItem.amount}}</h4>\n  </div>\n  <div class=\"edit-details\">\n    <input id=\"edit-qty\" type=\"number\" placeholder=\"Qty\" [(ngModel)]=\"qty\">\n    <input type=\"button\" class=\"submit-item\" value=\"OK\" (click)=\"onChangeQty()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cart/edit-item/edit-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__ = __webpack_require__("../../../../../src/app/shared/cart-item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditItemComponent = /** @class */ (function () {
    function EditItemComponent() {
        this.updatedQty = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    EditItemComponent.prototype.ngOnInit = function () {
        this.qty = this.selectedCartItem.qty;
    };
    EditItemComponent.prototype.ngOnChanges = function () {
        this.qty = this.selectedCartItem.qty;
    };
    EditItemComponent.prototype.onChangeQty = function () {
        this.selectedCartItem.qty = this.qty;
        this.updatedQty.emit(this.selectedCartItem);
        console.log(this.selectedCartItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_cart_item_model__["a" /* CartItem */])
    ], EditItemComponent.prototype, "selectedCartItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EditItemComponent.prototype, "updatedQty", void 0);
    EditItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-item',
            template: __webpack_require__("../../../../../src/app/components/cart/edit-item/edit-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cart/edit-item/edit-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditItemComponent);
    return EditItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n    margin: 0 auto;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;    \n}\n.formDiv {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: 60px;\n}\nmat-tab-group {\n    width: 400px;\n    text-align: center;\n}\nmat-tab {\n    width: 200px;\n}\n.mat-tab-label {\n    font-size: 16px;\n    width: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- <h1>Shopping Cart</h1> -->\n  <div class=\"formDiv\">\n    <mat-tab-group>\n      <mat-tab label=\"Sign-In\"><app-signin></app-signin></mat-tab>\n      <mat-tab label=\"Sign-Up\"><app-signup></app-signup></mat-tab>\n    </mat-tab-group>\n  </div> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.url = "";
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production ? '' : 'http://localhost:3000';
    }
    LoginService.prototype.onLoad = function () {
        try {
            var user = JSON.parse(localStorage.getItem('shoppingCart'));
            if (user !== undefined) {
                this.currentUser.emit(user);
                this.cUser = user;
                console.log(user);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    LoginService.prototype.signUpService = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify(user);
        return this.http.post(this.url + '/api/users', body, { headers: headers });
    };
    LoginService.prototype.signInService = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var user = {
            username: email,
            password: password
        };
        var body = JSON.stringify(user);
        console.log(body);
        return this.http.post(this.url + '/api/users/login', body, { headers: headers });
    };
    LoginService.prototype.logOut = function () {
        this.cUser = undefined;
        localStorage.setItem("shoppingCart", "");
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\ninput, button {\n    font-size: 20px;\n}\n.full-width {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Login</h3>\n  <hr>\n  <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSignIn()\">\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"email\"\n      id=\"email\"\n      formControlName=\"email\"\n      placeholder=\"Email\"\n      >\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n        <input matInput type=\"password\"\n          id=\"password\"\n          formControlName=\"password\"\n          placeholder=\"Password\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" \n      class=\"full-width\" \n      type=\"submit\"\n      [disabled]=\"!signInForm.valid\"\n    >Sign-In</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(loginService, router, snackBar) {
        this.loginService = loginService;
        this.router = router;
        this.snackBar = snackBar;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required])
        });
    };
    SigninComponent.prototype.onSignIn = function () {
        var _this = this;
        var email = this.signInForm.value.email;
        var password = this.signInForm.value.password;
        this.loginService.signInService(email, password)
            .subscribe(function (response) {
            if (response.status === 200) {
                console.log('Login successfull');
            }
            else if (response.status === 404) {
                _this.snackBar.open("You are not valid user.", "Got-it");
            }
            else {
                _this.snackBar.open("Server issues.", "Got-it");
            }
        }, function (err) { return console.log(err); });
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/login/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatSnackBar */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\ninput, button {\n    font-size: 20px;\n}\n.full-width {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>New Registration</h3>\n    <hr>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignUp()\">\n      <mat-form-field class=\"full-width\">\n        <input matInput inputmode=\"text\" formControlName=\"fullname\" id=\"fullname\" placeholder=\"Full Name\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput inputmode=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"Email\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"password\" formControlName=\"password\" id=\"password\" placeholder=\"Password\">\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"number\" size=\"10\" formControlName=\"phno\" id=\"phno\" placeholder=\"Phone No.\">\n      </mat-form-field>\n      <button mat-raised-button \n        color=\"primary\" \n        class=\"full-width\" \n        type=\"submit\"\n        [disabled]=\"!signUpForm.valid\"\n      >Register</button>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__("../../../../../src/app/components/login/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'fullname': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]),
            'phno': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(10)])
        });
    };
    SignupComponent.prototype.onSignUp = function () {
        var _this = this;
        var fullName = this.signUpForm.value.fullname;
        var email = this.signUpForm.value.email;
        var password = this.signUpForm.value.password;
        var phno = this.signUpForm.value.phno;
        var newUser = { fullName: fullName, email: email, password: password, phno: phno };
        this.loginService.signUpService(newUser)
            .subscribe(function (response) {
            if (response.status === 200) {
                var data = JSON.parse(response["_body"]);
                console.log(data);
                var user = new __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */](data._id, data.fullName, data.email, data.password, data.phno);
                _this.loginService.currentUser.emit(user);
                _this.loginService.cUser = user;
                localStorage.setItem("shoppingCart", JSON.stringify(user));
                _this.router.navigateByUrl('/products');
            }
            else if (response.status === 404) {
            }
            else {
            }
        }, function (error) { return console.log(error); });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/login/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, fullName, email, password, phno) {
        this._id = _id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.phno = phno;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  h2 {\n    float:left;\n    color: rgba(133, 192, 238, 0.808);\n    margin: 8px;\n  }\n  mat-toolbar-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .menu {\n    margin-left: 10px;\n  }\n  .search {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 8px;\n      margin-left: auto;\n  }\n  #input-search {\n    font-size: 16px;\n    margin-right: 8px;\n  }\n  .login {\n\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <h2 routerLink=\"/\">Shopping Cart</h2>\n      <div class=\"menu\">\n        <a mat-button routerLink=\"/products\">Home</a>\n        <a mat-button routerLink=\"/cart\">Cart</a>\n      </div>\n      <div class=\"search\">\n        <input type=\"text\" id=\"input-search\" placeholder=\"Search\">\n        <button *ngIf=\"!currentUser; else infoText\" class=\"login\" mat-raised-button color=\"primary\" routerLink=\"/login\">Login</button>\n        <ng-template #infoText>\n            <button mat-button [matMenuTriggerFor]=\"menu\">{{ currentUser.email }}</button>\n            <mat-menu #menu=\"matMenu\">\n              <button mat-menu-item>Profile</button>\n              <button mat-menu-item (click)=\"logout()\">Logout</button>\n            </mat-menu>\n        </ng-template>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/components/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        this.loginService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
        console.log(this.currentUser);
    };
    NavBarComponent.prototype.logout = function () {
        this.loginService.logOut();
        this.currentUser = undefined;
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/add-to-cart/add-to-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .add-to-cart-btn {\n    color: white;\n    background: blue;\n    font-size: 16px;\n    border-radius: 4px;\n    border: 1px solid gray;\n    width: 100px;\n    height: 30px;\n}\n.add-to-cart-div {\n    width: 100%;\n    border: 1px solid gray;\n} */\n\nh2, h3, h4, input {\n    margin: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/add-to-cart/add-to-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title>Select quantity to add in cart</h2>\n  <hr>\n  <mat-dialog-content>\n    <h3>Product Name : {{data.name}}</h3>\n    <h4>Price : {{product.price}} </h4>\n    <mat-form-field>\n      <input matInput placeholder=\"Quantity\" type=\"number\" [(ngModel)]=\"qtyInput\" (change)=\"changeQty($event)\"> \n    </mat-form-field>\n    <h3 *ngIf=\"status\">Invalid quantity.</h3>\n    <h2>Total : {{total}}</h2>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n    <div style=\"margin: 0 auto; text-align: center\">\n      <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\">OK</button>\n      <button mat-raised-button color=\"accent\" (click)=\"onCancleClick()\">Cancle</button>\n    </div>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/products/add-to-cart/add-to-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_model__ = __webpack_require__("../../../../../src/app/components/products/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.status = false;
        this.qtyInput = 1;
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        this.product = this.data;
        this.total = this.product.price * this.qtyInput;
    };
    AddToCartComponent.prototype.changeQty = function (event) {
        if (this.qtyInput > 0 && this.qtyInput <= this.product.qty) {
            this.total = this.product.price * this.qtyInput;
            this.status = false;
        }
        else {
            this.status = true;
        }
    };
    AddToCartComponent.prototype.onOkClick = function () {
        // let newCartItem = new CartItem(this.product._id, this.product.name, this.qtyInput, this.product.price, this.product.img);
        // super.cartService.addCartItem(newCartItem);
        if (!this.status) {
            this.thisDialogRef.close(this.qtyInput);
        }
    };
    AddToCartComponent.prototype.onCancleClick = function () {
        this.thisDialogRef.close('cancle');
    };
    AddToCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-to-cart',
            template: __webpack_require__("../../../../../src/app/components/products/add-to-cart/add-to-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/add-to-cart/add-to-cart.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product-details/product-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-details {\n    margin-left: 8px;\n    border: 1px solid transparent;\n}\n\ndiv > h3, h4  {\n    margin: 2px;\n}\n\nimg {\n    max-height: 350px;\n    max-height: 350px;\n}\n\n.product-other-details {\n    float: left;\n}\n\n.add-to-cart {\n\n    font-size: 20px;\n    width: 130px;\n    height: 40px;\n    float: right;\n    margin-right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-details\">\n  <div class=\"product-name\">\n    <h2>{{product.name}}</h2>\n  </div>\n  <hr>\n  <div class=\"product-img\">\n    <img [src]=\"product.img\" alt=\"product name\">\n  </div>\n  <div class=\"product-other-details\">\n    <div>\n      <h3>Price : {{product.price}} ({{product.discount}}% off)</h3>\n      <h4>Available Qty : {{product.qty}}</h4>\n    </div>\n    <p>{{product.description}}</p>\n    \n  </div>\n  <div>\n    <button class=\"add-to-cart\" mat-raised-button color=\"primary\" [disabled]=\"status\" (click)=\"openDialog()\">Add to cart</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_to_cart_add_to_cart_component__ = __webpack_require__("../../../../../src/app/components/products/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart_service__ = __webpack_require__("../../../../../src/app/components/cart/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_cart_item_model__ = __webpack_require__("../../../../../src/app/shared/cart-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_service__ = __webpack_require__("../../../../../src/app/components/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(dialog, snackBar, productService, cartService, route) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.addToCartProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.status = false;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.product = _this.productService.getProduct(_this.id);
        });
    };
    ProductDetailsComponent.prototype.ngOnChanges = function () {
        if (this.product.qty === 0) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    };
    ProductDetailsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__add_to_cart_add_to_cart_component__["a" /* AddToCartComponent */], {
            width: '400px',
            data: this.product
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result > 0) {
                var newCartItem = new __WEBPACK_IMPORTED_MODULE_5__shared_cart_item_model__["a" /* CartItem */](_this.product._id, _this.product.name, result, _this.product.price, _this.product.img);
                console.log(newCartItem);
                _this.cartService.addCartItem(newCartItem);
                _this.snackBar.open(result + " items added in cart.", "Got-it");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductDetailsComponent.prototype, "addToCartProduct", void 0);
    ProductDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-details',
            template: __webpack_require__("../../../../../src/app/components/products/product-details/product-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__cart_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product-index/product-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product-index/product-index.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Please select a product</h1>"

/***/ }),

/***/ "../../../../../src/app/components/products/product-index/product-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductIndexComponent = /** @class */ (function () {
    function ProductIndexComponent() {
    }
    ProductIndexComponent.prototype.ngOnInit = function () {
    };
    ProductIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-index',
            template: __webpack_require__("../../../../../src/app/components/products/product-index/product-index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product-index/product-index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductIndexComponent);
    return ProductIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv, h4, h5 {\n    margin: 0px;\n    display: inline;\n}\n.img {\n    float: left;    \n}\nimg{\n    border: 1px solid grey;\n}\n.details {\n    float: right;\n}\n.product-list-item:hover {\n    background:gray;\n}\n.active {\n    background-color: gray;\n}\n/* pro-name {\n    color: blue;\n}\nh5 {\n    display: inline;\n}\n.list-item-div {\n    border: 1px solid gray;\n    padding: 2px;\n    margin-bottom: 2px;\n}\n\n.list-item-div:hover {\n    background: rgb(192, 191, 191);\n}\n.img-div {\n    display: inline-block;\n    float: left;\n}\n.details-div{\n    display: inline-block;\n}\n.pro-name{\n    margin: 4px;\n}\n.qty {\n    margin: 4px;\n    float: right;\n}\n.price {\n    margin: 4px;    \n    float: left;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n    [routerLink]=\"[index]\"\n    style=\"cursor: pointer;\">\n    <mat-list-item \n    routerLinkActive=\"active\"\n    class=\"product-list-item\">\n        <div class=\"img\">\n            <mat-icon mat-list-icon><img src=\"{{product.img}}\" height=\"40px\" width=\"40px\"/></mat-icon>\n        </div>\n        <div mat-line class=\"details\">\n            <h4>{{product.name}}</h4><br>\n            <span>Price :{{product.price}}</span>\n            <span>Available : {{product.qty}}</span>  \n        </div>\n    </mat-list-item>\n    <mat-divider ></mat-divider>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_model__ = __webpack_require__("../../../../../src/app/components/products/product.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent() {
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */])
    ], ProductListItemComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductListItemComponent.prototype, "index", void 0);
    ProductListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list-item',
            template: __webpack_require__("../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product-list/product-list-item/product-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListItemComponent);
    return ProductListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-list>\n    <h2 mat-subheader>Products</h2>\n    <app-product-list-item \n        *ngFor=\"let product of products; let i = index\"\n        [product]=\"product\"\n        [index]=\"i\"\n    ></app-product-list-item>        \n    </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/components/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return console.log(error); });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/components/products/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(_id, name, description, qty, price, discount, img) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.qty = qty;
        this.price = price;
        this.discount = discount;
        this.img = img;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.products = [];
        this.url = "";
        this.url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production ? '' : 'http://localhost:3000';
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(this.url + '/api/products')
            .map(function (response) {
            var products = response.json();
            _this.products = products;
            return products;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
        // return this.products.slice();
    };
    ProductService.prototype.getProduct = function (index) {
        return this.products[index];
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard {\n    display: inline;\n    overflow: hidden;\n}\n\n.product-list {\n    float:left;\n    width: 30%;\n    height: 600px;\n    overflow:auto;\n}\n\n.product-details {\n    width: 70%;\n    float:right;\n    height: 600px;    \n    overflow:auto;    \n}\n\n.add-to-cart {\n    margin-top: 10px;\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <div class=\"product-list\">\n      <app-product-list></app-product-list>\n    </div>\n    <div class=\"product-details\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div class=\"add-to-cart\" *ngIf=\"selectedCartProduct\">\n    <hr>\n    <app-add-to-cart></app-add-to-cart>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/components/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        // this.dataStorageService.getProducts();
        // this.selectedCartProduct = undefined;
    };
    ProductsComponent.prototype.onCartAdded = function (product) {
        this.selectedCartProduct = product;
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/products/products.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_data_storage_service__["a" /* DataStorageService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/cart-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    function CartItem(id, name, qty, amount, img) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.amount = amount;
        this.img = img;
    }
    return CartItem;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_product_service__ = __webpack_require__("../../../../../src/app/components/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, productService) {
        this.http = http;
        this.productService = productService;
    }
    DataStorageService.prototype.getProducts = function () {
        this.http.get('http://localhost:3000/api/products')
            .subscribe(function (response) {
            var products = response.json();
            console.log(products);
        });
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__components_products_product_service__["a" /* ProductService */]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    API_URL: "http://localhost:3000"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map