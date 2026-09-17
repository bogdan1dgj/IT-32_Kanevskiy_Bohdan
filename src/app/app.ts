import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  products: any;

  newName = '';
  newPrice = 0;
  newQuantity = 0;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct() {

    if (this.newName.trim() === '') {
      return;
    }

    this.productService.addProduct(
      this.newName,
      this.newPrice,
      this.newQuantity
    );

    this.newName = '';
    this.newPrice = 0;
    this.newQuantity = 0;
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
  }
}