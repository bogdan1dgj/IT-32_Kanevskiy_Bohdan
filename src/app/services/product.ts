import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = signal([
    {
      id: 1,
      name: 'Ноутбук',
      price: 32000,
      quantity: 4
    },
    {
      id: 2,
      name: 'Мишка',
      price: 800,
      quantity: 10
    },
    {
      id: 3,
      name: 'Монітор',
      price: 9000,
      quantity: 3
    }
  ]);

  getProducts() {
    return this.products;
  }

  addProduct(name: string, price: number, quantity: number) {

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      quantity: quantity
    };

    this.products.update(products => [
      ...products,
      newProduct
    ]);
  }

  removeProduct(id: number) {

    this.products.update(products =>
      products.filter(product => product.id !== id)
    );
  }
}