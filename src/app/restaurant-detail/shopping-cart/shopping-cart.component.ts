import { Component, OnInit } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';

import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {}


  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

}
