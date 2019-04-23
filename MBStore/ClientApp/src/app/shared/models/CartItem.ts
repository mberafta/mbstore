import { CartItemProduct } from './CartItemProduct';
import { Cart } from './Cart';
import { Product } from './Product';
import { UUID } from 'angular2-uuid';

export class CartItem {

  public cartItemId: string;
  public cartItemProducts: CartItemProduct[];
  public quantity: number;
  public subTotal: number;
  public cartId: string;
  public cart: Cart;

  constructor(product?: Product) {
    this.cartItemId = UUID.UUID();
    this.quantity = 1;

    if (product) {
      this.subTotal = this.quantity * product.excludingTaxPrice;
    }

  }

}
