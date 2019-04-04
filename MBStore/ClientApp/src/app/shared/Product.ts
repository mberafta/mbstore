import { CartItemProduct } from './CartItemProduct';

export class Product {
    public productId: string;
    public name: string;
    public description: string;
    public imageUrl: string;
    public excludingTaxPrice: string;
    public includingTaxPrice: string;
    public vatRate: number;
    public cartItemProducts: CartItemProduct[];
}