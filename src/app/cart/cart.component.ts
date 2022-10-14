import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { interfaceDishes } from '../dishes/interface-dishes';
import { dishes } from '../dishes/dishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items: Array<interfaceDishes> = [];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.items = this.cart.getItems();
  }

}
