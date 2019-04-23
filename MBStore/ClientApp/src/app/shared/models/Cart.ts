import { CartItem } from './CartItem';

export class Cart {
    public cartId: string;
    public total: number;
    public cartItems: CartItem[];
    public orderId: string;
    public order: any;
}