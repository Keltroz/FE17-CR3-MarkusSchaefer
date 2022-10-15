import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { interfaceDishes } from '../dishes/interface-dishes';
import { dishes } from '../dishes/dishes';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(8),
    ]),
  });

  items: Array<interfaceDishes> = [];
  amount: number = 0;
  discount: number = 0;
  total: number = 0;
  service: number = 3.10;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.amount = 0;
    this.discount = 0;
    this.total = 0;
    this.service = 3.10;

    //  summary formula

    
    this.items.forEach((item) => {
      this.amount = this.amount + item.price;
    });
    console.log(this.items);
    
    // discount formula
    this.total = this.service + this.amount;

    if (this.amount >= 40) {
      console.log('if is working');
      this.total = this.amount * 0.85;
      this.discount = this.amount * 0.15;
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
