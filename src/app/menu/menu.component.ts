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
  dish: interfaceDishes = {} as interfaceDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   this.dish = dishes[this.id];
    // });
  }

  addToCart() {
    window.alert('Your product has been added to your cart.');
    this.cart.addToCart(this.dish);
    console.log(this.dish)
  }
}
