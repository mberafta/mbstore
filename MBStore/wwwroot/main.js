(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-ngboostrap.module.ts":
/*!******************************************!*\
  !*** ./src/app/app-ngboostrap.module.ts ***!
  \******************************************/
/*! exports provided: AppNgBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNgBootstrapModule", function() { return AppNgBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");






var AppNgBootstrapModule = /** @class */ (function () {
    function AppNgBootstrapModule() {
    }
    AppNgBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()
            ],
            exports: [
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"]
            ]
        })
    ], AppNgBootstrapModule);
    return AppNgBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ "./src/app/components/product/product-list/product-list.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'products', component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]] },
    { path: '**', redirectTo: '' },
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">MB Store</a>\r\n  <button class=\"navbar-toggler\"\r\n          type=\"button\"\r\n          aria-controls=\"navbarNav\"\r\n          aria-expanded=\"false\"\r\n          aria-label=\"Toggle navigation\"\r\n          [attr.aria-expanded]=\"!isCollapsed\"\r\n          (click)=\"isCollapsed = !isCollapsed\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\" [collapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" *ngFor=\"let p of pages; let i = index;\">\r\n        <a class=\"nav-link\" [routerLink]=[p.link]>\r\n          {{p.name}}\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"loginLink\">Login</a>\r\n      </li>\r\n    </ul>\r\n    <mbs-cart-dropdown></mbs-cart-dropdown>\r\n  </div>\r\n</nav>\r\n<div class=\"jumbotron jumbotron-fluid low-opacity\">\r\n  <div class=\"container-fluid text-center\">\r\n    <h1>MB STORE</h1>\r\n    <strong>Solution e-commerce Angular & ASP .NET CORE 2</strong>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<footer class=\"low-opacity\">\r\n  <div class=\"container-fluid text-center global-padding\" style=\"background:#343a40; color:white;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3 offset-sm-1\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate nunc rutrum maximus fringilla.\r\n        Sed nec nunc scelerisque, facilisis purus vel, scelerisque lacus.\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate nunc rutrum maximus fringilla.\r\n        Sed nec nunc scelerisque, facilisis purus vel, scelerisque lacus.\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate nunc rutrum maximus fringilla.\r\n        Sed nec nunc scelerisque, facilisis purus vel, scelerisque lacus.\r\n      </div>\r\n    </div>\r\n    <div class=\"row global-padding\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <small class=\"text-center\">Copyright &copy; MB Store</small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
        this.isCollapsed = true;
        this.loginLink = "/login";
        this.pages = [
            {
                name: "Produits", link: "/products"
            }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_ngboostrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-ngboostrap.module */ "./src/app/app-ngboostrap.module.ts");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ "./src/app/components/product/product-list/product-list.component.ts");
/* harmony import */ var _components_cart_cart_dropdown_cart_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cart/cart-dropdown/cart-dropdown.component */ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");









// COMPONENTS




// SERVICES




function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _components_cart_cart_dropdown_cart_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["CartDropdownComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_ngboostrap_module__WEBPACK_IMPORTED_MODULE_5__["AppNgBootstrapModule"],
                ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost']
                    }
                })
            ],
            providers: [
                _services_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_15__["LoginService"],
                _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/cart/cart-dropdown/cart-dropdown.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LWRyb3Bkb3duL2NhcnQtZHJvcGRvd24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/cart/cart-dropdown/cart-dropdown.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group ml-auto mr-1\" dropdown *ngIf=\"currentCart != null\">\r\n  <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\"\r\n          aria-controls=\"dropdown-basic\">\r\n    Panier ({{currentCart.cartItems.length}}) &nbsp;<span class=\"caret\"></span>\r\n  </button>\r\n  <div id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n    <ul class=\"list-group\">\r\n      <li role=\"menuitem\" *ngFor=\"let cartItem of currentCart.cartItems; let i=index;\" class=\"list-group-item\">\r\n        {{cartItem.name}} - {{cartItem.subtotal | currency}}\r\n        <button class=\"btn btn-danger float-right\" (click)=\"deleteFromCart(i)\">Supprimer</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/cart/cart-dropdown/cart-dropdown.component.ts ***!
  \**************************************************************************/
/*! exports provided: CartDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDropdownComponent", function() { return CartDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");



var CartDropdownComponent = /** @class */ (function () {
    function CartDropdownComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.cartService.cartStream.subscribe(function (newCart) {
            _this.currentCart = newCart;
            console.log(newCart);
        });
    }
    CartDropdownComponent.prototype.ngOnInit = function () {
        this.cartService.getCartInstance();
    };
    CartDropdownComponent.prototype.ngOnDestroy = function () {
    };
    CartDropdownComponent.prototype.deleteFromCart = function (index) {
        this.cartService.deleteItem(index);
    };
    CartDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mbs-cart-dropdown',
            template: __webpack_require__(/*! ./cart-dropdown.component.html */ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./cart-dropdown.component.css */ "./src/app/components/cart/cart-dropdown/cart-dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartDropdownComponent);
    return CartDropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 offset-md-3\">\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" class=\"my-2 my-lg-0\">\r\n        <div class=\"form-group\">\r\n          <label for=\"nameControl\">NOM</label>\r\n          <input class=\"form-control\" id=\"nameControl\" aria-describedby=\"loginName\" placeholder=\"Nom...\"\r\n                 [formControl]=\"loginForm.controls['name']\"\r\n                 [ngClass]=\"{'is-invalid':!name.valid, 'is-valid':name.valid}\">\r\n          <div class=\"invalid-feedback\" *ngIf=\"!name.valid\">\r\n            Veuillez saisir un nom\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"passwordControl\">MOT DE PASSE</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"passwordControl\" placeholder=\"Mot de passe...\"\r\n                 [formControl]=\"loginForm.controls['password']\"\r\n                 [ngClass]=\"{'is-invalid':!password.valid, 'is-valid':password.valid}\">\r\n          <div class=\"invalid-feedback\" *ngIf=\"!password.valid\">\r\n            Veuillez saisir un mot de passe\r\n          </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Valider</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService) {
        this.fb = fb;
        this.loginService = loginService;
        this.loginForm = fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.name = this.loginForm.controls['name'];
        this.password = this.loginForm.controls['password'];
    }
    LoginComponent.prototype.onSubmit = function (formValue) {
        this.loginService.login(formValue).subscribe(function (response) {
            if (response['token']) {
                localStorage.setItem('access_token', response['token']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mbs-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product-list/product-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product/product-list/product-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\" style=\"padding:5px;\" *ngFor=\"let p of displayedProducts\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" src=\"http://via.placeholder.com/640x360\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{p.name}} - <strong>{{p.includingTaxPrice | currency}}</strong></h5>\r\n          <p class=\"card-text\">{{p.description}}\r\n            content.</p>\r\n          <a class=\"btn btn-primary\" (click)=\"addToCart(p)\"><span>Ajouter</span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div class=\"row\" style=\"padding-bottom:2.5em;\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <div class=\"btn-group\">\r\n        <button class=\"btn btn-info\" *ngIf=\"paginationOptions.currentPage > 0\" (click)=\"changePage(-1)\">\r\n          Précédent\r\n        </button>\r\n        <button class=\"btn btn-info\" *ngIf=\"paginationOptions.currentPage + 1 < paginationOptions.totalPages\" (click)=\"changePage(1)\">\r\n          Suivant\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/product/product-list/product-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(cartService, productService) {
        this.cartService = cartService;
        this.productService = productService;
        this.products = [];
        this.displayedProducts = [];
        this.paginationOptions = {
            currentPage: 0,
            totalPages: 0,
            pageSize: 9
        };
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (res) {
            _this.products = res;
            _this.paginationOptions.totalPages = _this.getTotalPages(_this.products, _this.paginationOptions.pageSize);
            _this.paginationsOptionsStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_this.paginationOptions);
            _this.paginationsOptionsStream.subscribe(function (val) {
                _this.getDisplayedProducts(_this.products, val);
            });
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.paginationsOptionsStream.unsubscribe();
    };
    ProductListComponent.prototype.getTotalPages = function (items, size) {
        var valid = items && items.length > 0, result = 0;
        if (valid) {
            var modulo = items.length % size;
            if (modulo === 0)
                return items.length / size;
            else
                return ((items.length - modulo) / size) + 1;
        }
        return 0;
    };
    ProductListComponent.prototype.changePage = function (step) {
        if (step === 1) {
            if (this.paginationOptions.currentPage + 1 < this.paginationOptions.totalPages)
                this.paginationOptions.currentPage++;
        }
        else if (step === -1) {
            if (this.paginationOptions.currentPage - 1 >= 0)
                this.paginationOptions.currentPage--;
        }
        this.paginationsOptionsStream.next(this.paginationOptions);
    };
    ProductListComponent.prototype.getDisplayedProducts = function (arr, opts) {
        this.displayedProducts = arr.slice().filter(function (p, index, arr) {
            var page = opts.currentPage, size = opts.pageSize;
            return index >= page * size && index < (page + 1) * size;
        });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        this.cartService.addItem(product);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'mbs-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/components/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem("access_token");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_models_models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/models.index */ "./src/app/shared/models/models.index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.cartStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    CartService.prototype.saveCart = function () {
        var _this = this;
        this.http.post("/api/Cart", this._currentCart).subscribe(function (response) {
            _this.cartStream.next(response);
            _this._currentCart = response;
        }, function (error) {
        });
    };
    CartService.prototype.getCartInstance = function () {
        var _this = this;
        this.http.get("/api/Cart").subscribe(function (response) {
            _this.cartStream.next(response);
            _this._currentCart = response;
        });
    };
    CartService.prototype.addItem = function (product) {
        var cartItem = new _shared_models_models_index__WEBPACK_IMPORTED_MODULE_3__["CartItem"](product);
        this._currentCart.cartItems.push(cartItem);
        this.saveCart();
    };
    CartService.prototype.deleteItem = function (index) {
        this._currentCart.cartItems.splice(index, 1);
        this.saveCart();
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (model) {
        return this.http.post("/api/Login", model);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAll = function () {
        return this.http.get("/api/Product");
    };
    ProductService.prototype.getOne = function (id) {
        return this.http.get("/api/Product/${id}");
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/models/Cart.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/Cart.ts ***!
  \***************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/shared/models/CartItem.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/CartItem.ts ***!
  \*******************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_0__);

var CartItem = /** @class */ (function () {
    function CartItem(product) {
        this.cartItemId = angular2_uuid__WEBPACK_IMPORTED_MODULE_0__["UUID"].UUID();
        this.quantity = 1;
        this.name = product.name;
        if (product) {
            this.subTotal = this.quantity * product.excludingTaxPrice;
        }
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/shared/models/CartItemProduct.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/CartItemProduct.ts ***!
  \**************************************************/
/*! exports provided: CartItemProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemProduct", function() { return CartItemProduct; });
var CartItemProduct = /** @class */ (function () {
    function CartItemProduct(cartItem, product) {
    }
    return CartItemProduct;
}());



/***/ }),

/***/ "./src/app/shared/models/Order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/Order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/Product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/Product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/models.index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/models.index.ts ***!
  \***********************************************/
/*! exports provided: Cart, CartItem, CartItemProduct, Order, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart */ "./src/app/shared/models/Cart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return _Cart__WEBPACK_IMPORTED_MODULE_0__["Cart"]; });

/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ "./src/app/shared/models/CartItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return _CartItem__WEBPACK_IMPORTED_MODULE_1__["CartItem"]; });

/* harmony import */ var _CartItemProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItemProduct */ "./src/app/shared/models/CartItemProduct.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartItemProduct", function() { return _CartItemProduct__WEBPACK_IMPORTED_MODULE_2__["CartItemProduct"]; });

/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Order */ "./src/app/shared/models/Order.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _Order__WEBPACK_IMPORTED_MODULE_3__["Order"]; });

/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./src/app/shared/models/Product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product__WEBPACK_IMPORTED_MODULE_4__["Product"]; });








/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\XUFJ641\source\repos\MBStore\mbstore\clientapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map