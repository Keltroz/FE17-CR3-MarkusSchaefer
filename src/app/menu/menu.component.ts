import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes/dishes';
import { interfaceDishes } from '../dishes/interface-dishes';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Array<interfaceDishes> = dishes;  
  id: number = 0;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {    
  }

  addToCart(dishId: number) {    
    console.log(dishId);
    var dish = dishes[dishId];
    this.cart.addToCart(dish);
    window.alert('Your product has been added to your cart.');
    console.log(dish)    
  }
}
