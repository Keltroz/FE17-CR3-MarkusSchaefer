import { Injectable } from '@angular/core';
import { interfaceDishes } from './dishes/interface-dishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<interfaceDishes> = []

  constructor() { }

  addToCart(product: interfaceDishes) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
