import { CartItem } from './CartItem';
import { Product } from './Product';

export class CartItemProduct {
  public cartItemId: string;
  public cartItem: CartItem;

  public productId: string;
  public product: Product;

  constructor(cartItem: CartItem, product: Product) {

  }

}
