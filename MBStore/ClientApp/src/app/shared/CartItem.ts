import { CartItemProduct } from './CartItemProduct';
import { Cart } from './Cart';

export class CartItem {
    public cartItemId: string;
    public cartItemProducts: CartItemProduct[];
    public quantity: number;
    public subTotal: number;
    public cartId: string;
    public cart: Cart;
}