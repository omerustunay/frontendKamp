import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = "";
  // productResponseModel:ProductResponseModel = {};
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {}

  getProducts() {

    this.httpClient.get(this.apiUrl);
  }
}
