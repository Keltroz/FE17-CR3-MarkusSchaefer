import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { interfaceDishes } from '../dishes/interface-dishes';
import { dishes } from '../dishes/dishes';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
});

  items: Array<interfaceDishes> = [];
  // items: Array<interfaceDishes> = dishes;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.items = this.cart.getItems();
    console.log(this.items);
  }

  onSubmit() {
    if(this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}