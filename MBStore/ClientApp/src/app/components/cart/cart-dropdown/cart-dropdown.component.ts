import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';

@Component({
  selector: 'mbs-cart-dropdown',
  templateUrl: './cart-dropdown.component.html',
  styleUrls: ['./cart-dropdown.component.css']
})

export class CartDropdownComponent implements OnInit {

  currentCart: Cart;

  constructor(private cartService: CartService) {
    this.cartService.cartStream.subscribe(
      (newCart) => {
        this.currentCart = newCart;
        console.log(newCart);
      }
    );
  }

  ngOnInit() {
    this.cartService.getCartInstance();
  }

  ngOnDestroy() {
    
  }

  deleteFromCart(index: number): void {
    this.cartService.deleteItem(index);
  }

}
