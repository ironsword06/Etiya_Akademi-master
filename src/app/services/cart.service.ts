import { CartItem } from './../models/cartItem';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item = CartItems.find((c) => c.product.id === product.id);
    if (item) {
      CartItems.splice(CartItems.indexOf(item), 1);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }
}
