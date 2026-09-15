import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  products = [
    {
      name: 'Ноутбук',
      price: 32000,
      quantity: 5
    },
    {
      name: 'Мишка',
      price: 900,
      quantity: 0
    },
    {
      name: 'Клавіатура',
      price: 1800,
      quantity: 7
    }
  ];

  newName = '';
  newPrice = 0;
  newQuantity = 0;

  addProduct() {

    if (this.newName.trim() === '') {
      return;
    }

    this.products.push({
      name: this.newName,
      price: this.newPrice,
      quantity: this.newQuantity
    });

    this.newName = '';
    this.newPrice = 0;
    this.newQuantity = 0;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}