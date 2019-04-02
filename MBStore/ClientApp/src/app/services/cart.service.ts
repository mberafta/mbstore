import { Injectable, Inject, inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class CartService{
    
    private readonly CART_KEY = "mbstore_cart";

    constructor(@Inject(LOCAL_STORAGE) private storage:StorageService){

    }

    public storeCart(newCart:any){
        this.storage.set(this.CART_KEY, newCart);
    }

    public getStoredCart(){
        return this.storage.get(this.CART_KEY);
    }

    public saveCart(){

    }

    public getCartInstance(){

    }

    public resetCart(){
        this.storage.set(this.CART_KEY, null);
    }

}