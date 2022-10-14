import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes/dishes';
import { interfaceDishes } from '../dishes/interface-dishes';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dish: interfaceDishes = {} as interfaceDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.dish = dishes[this.id];
    })
  }

  addToCart() {
    window.alert("Your product has been added to your cart.");
    this.cart.addToCart(this.dish);
  }

}
