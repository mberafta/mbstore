import { CartItemProduct } from './CartItemProduct';

export class Product {
    public productId: string;
    public name: string;
    public description: string;
    public imageUrl: string;
    public excludingTaxPrice: number;
    public includingTaxPrice: number;
    public vatRate: number;
    public cartItemProducts: CartItemProduct[];
}
