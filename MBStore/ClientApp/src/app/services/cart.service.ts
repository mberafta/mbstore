import { Injectable, Inject, inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  private readonly CART_KEY = "mbstore_cart";

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private http: HttpClient) {

  }

  public storeCart(newCart: any) {
    this.storage.set(this.CART_KEY, newCart);
  }

  public getStoredCart() {
    return this.storage.get(this.CART_KEY);
  }

  public saveCart() {
    let currentCart = this.getStoredCart();
    return this.http.post("/api/Cart", currentCart);
  }

  public getCartInstance() {
    return this.http.get("/api/Cart");
  }

  public resetCart() {
    this.storage.set(this.CART_KEY, null);
  }

}
