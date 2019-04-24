import { ProductService } from './../../../services/product.service';
import { CartService } from './../../../services/cart.service';
import { PaginationOptions, Product } from './../../../shared/models/models.index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mbs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  displayedProducts: any[] = [];

  paginationOptions: PaginationOptions = {
    currentPage: 0,
    totalPages: 0,
    pageSize: 9
  };

  paginationsOptionsStream: BehaviorSubject<PaginationOptions>;

  constructor(private cartService: CartService, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAll().subscribe(
      (res) => {
        this.products = res as Product[];
        this.paginationOptions.totalPages = this.getTotalPages(this.products, this.paginationOptions.pageSize);
        this.paginationsOptionsStream = new BehaviorSubject<PaginationOptions>(this.paginationOptions);

        this.paginationsOptionsStream.subscribe(
          (val) => {
            this.getDisplayedProducts(this.products, val);
          }
        );
      }
    );
  }

  ngOnDestroy() {
    this.paginationsOptionsStream.unsubscribe();
  }

  public getTotalPages(items: any[], size): number {
    let valid = items && items.length > 0, result = 0;
    if (valid) {
      let modulo = items.length % size;

      if (modulo === 0)
        return items.length / size;
      else
        return ((items.length - modulo) / size) + 1;
    }

    return 0;
  }

  public changePage(step): void {
    if (step === 1) {
      if (this.paginationOptions.currentPage + 1 < this.paginationOptions.totalPages)
        this.paginationOptions.currentPage++;
    }
    else if (step === -1) {
      if (this.paginationOptions.currentPage - 1 >= 0)
        this.paginationOptions.currentPage--;
    }

    this.paginationsOptionsStream.next(this.paginationOptions);
  }

  public getDisplayedProducts(arr: any[], opts: PaginationOptions) {
    this.displayedProducts = [...arr].filter((p, index, arr) => {
      let page = opts.currentPage,
        size = opts.pageSize;

      return index >= page * size && index < (page + 1) * size;
    });
  }

  addToCart(product: Product) :void{
    this.cartService.addItem(product);
  }

 

}
