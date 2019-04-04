import { Injectable } from '@angular/core';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getAll() {
        return this.http.get("/api/Product");
    }

    getOne(id: string) {
        return this.http.get("/api/Product/${id}");
    }

}