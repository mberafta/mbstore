import { Injectable, Inject, inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { Product, CartItem, CartItemProduct, Cart } from '../shared/models/models.index';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CartService {

  public cartStream: Subject<Cart> = new BehaviorSubject<Cart>(null);

  private _currentCart: Cart;

  constructor(private http: HttpClient) {

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

  public addItem(product: Product): void {
    let cartItem: CartItem = new CartItem(product);
    this._currentCart.cartItems.push(cartItem);
    this.saveCart();
  }

  public deleteItem(index: number): void {
    this._currentCart.cartItems.splice(index, 1);
    this.saveCart();
  }

}
