import { Cart } from './Cart';

export class Order {
    public id: string;
    public status: string;
    public cartId: string;
    public cart: Cart;
}