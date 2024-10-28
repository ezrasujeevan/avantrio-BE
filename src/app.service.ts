import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  unitPrice: number;
}
export interface Cart extends Product {
  quantity: number;
}

@Injectable()
export class AppService {
  private inventories: Product[] = [
    { id: 1, name: 'bacon', unitPrice: 10.99 },
    { id: 2, name: 'eggs', unitPrice: 3.99 },
    { id: 3, name: 'cheese', unitPrice: 6.99 },
    { id: 4, name: 'chives', unitPrice: 1.0 },
    { id: 5, name: 'wine', unitPrice: 11.99 },
    { id: 6, name: 'brandy', unitPrice: 17.55 },
    { id: 7, name: 'bananas', unitPrice: 0.69 },
    { id: 8, name: 'ham', unitPrice: 2.69 },
    { id: 9, name: 'tomatoes', unitPrice: 3.26 },
    { id: 10, name: 'tissue', unitPrice: 8.45 },
  ];

  private cart: Cart[] = [];

  getHello() {
    return 'Hello World!';
  }

  addToCart(id: number) {
    const product = this.inventories.find((product) => product.id === id);
    if (product) {
      const cartItem = this.cart.find((cartItem) => cartItem.id === id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    }
    return this.cart;
  }

  removeFromCart(id: number) {
    const cartItem = this.cart.find((cartItem) => cartItem.id === id);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.cart = this.cart.filter((cartItem) => cartItem.id !== id);
      }
    }
    return this.cart;
  }

  showAllProductsInCart() {
    return this.cart;
  }

  getAllProducts() {
    return this.inventories;
  }

  getTotal() {
    return this.cart.reduce((acc, cartItem) => {
      return acc + cartItem.unitPrice * cartItem.quantity;
    }, 0);
  }
}
