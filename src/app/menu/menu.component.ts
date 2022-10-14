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

  constructor(private route: ActivatedRoute, private cart: CartService) {
    // console.log(this.dishes);
  }

  ngOnInit(): void {

  }

 
}
