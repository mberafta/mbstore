import { Injectable, Inject, inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { Product, CartItem, CartItemProduct, Cart } from '../shared/models/models.index';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CartService {

  private readonly CART_KEY = "mbstore_cart";
  public cartStream: Subject<Cart> = new BehaviorSubject<Cart>(null);

  private _currentCart: Cart;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) {

  }

  public storeCart(newCart: any) {
    this.storage.set(this.CART_KEY, newCart);
  }

  public getStoredCart() {
    return this.storage.get(this.CART_KEY);
  }

  public saveCart() {
    this.http.post("/api/Cart", this._currentCart).subscribe(
      (response: Cart) => {
        this.cartStream.next(response);
        this._currentCart = response;
      },
      (error) => {

      }
    );
  }

  public getCartInstance() {
    this.http.get("/api/Cart").subscribe(
      (response: Cart) => {
        this.cartStream.next(response);
        this._currentCart = response;
      }
    );
  }

  public resetCart() {
    this.storage.set(this.CART_KEY, null);
  }

  public addItem(product: Product): void {
    let cartItem: CartItem = new CartItem(product);
    this._currentCart.cartItems.push(cartItem);
    this.saveCart();
  }

}
