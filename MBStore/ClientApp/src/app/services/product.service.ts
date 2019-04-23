import { Injectable } from '@angular/core';
import { Product } from '../shared/models/models.index';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
