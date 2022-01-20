import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: new FormControl(),
    address: new FormControl(),
  });

  ngOnInit(): void {
    console.log('logging');
    console.log(this.checkoutForm);
  }

  onSubmit() {
    // console.log('logging2');
    this.items = this.cartService.clearCart();
    window.alert(
      'Your order has been submitted ' +
        [this.checkoutForm.value.name, this.checkoutForm.value.address]
    );
    this.checkoutForm.reset();
  }
}
