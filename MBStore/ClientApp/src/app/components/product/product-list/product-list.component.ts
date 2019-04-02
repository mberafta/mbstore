import { PaginationOptions } from './../../../shared/PaginationOptions';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mbs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: any[] = [];
  displayedProducts: any[] = [];

  paginationOptions: PaginationOptions = {
    currentPage: 0,
    totalPages: 0,
    pageSize: 9
  };

  paginationsOptionsStream: BehaviorSubject<PaginationOptions>;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.products.push({
        name: 'Produit ' + (i + 1),
        price: 1.50 * (i + 1)
      });
    }

    this.paginationOptions.totalPages = this.getTotalPages(this.products, this.paginationOptions.pageSize);

    this.paginationsOptionsStream = new BehaviorSubject<PaginationOptions>(this.paginationOptions);

    this.paginationsOptionsStream.subscribe(
      (val) => {
        this.getDisplayedProducts(this.products, val);
      }
    );
  }

  ngOnInit() {

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

}
