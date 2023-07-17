import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../pages/menu/menu.component';
// import { MenuItem } from './menu.component';

export interface CartItem {
  item: MenuItem;  // Add the 'item' property
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private cartItems: CartItem[] = [];
  private storageKey = 'cartItems';
  constructor(private router:Router) {  const cartData = localStorage.getItem('cart');
  const storedItems = localStorage.getItem(this.storageKey);
  if (storedItems) {
    this.cartItems = JSON.parse(storedItems);
  }}
  getCartItems(): CartItem[] {
    return this.cartItems;
  }
  calculateTotalAmount(): number {
    return this.cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
  }
 
  // addToCart(item: CartItem): void {
  //   const currentItems = this.cartItemsSubject.getValue();
  //   const existingCartItem = currentItems.find(cartItem => cartItem.item.name === item.item.name);
  
  //   if (existingCartItem) {
  //     existingCartItem.quantity++; // Increase the quantity if the item already exists in the cart
  //   } else {
  //     currentItems.push(item);
  //   }
  
  //   this.cartItemsSubject.next(currentItems);
  // }
  addToCart(item: CartItem): void {
    const currentItems = this.cartItemsSubject.getValue();
    const existingCartItem = currentItems.find(cartItem => cartItem.item.name === item.item.name);
  
    if (existingCartItem) {
      existingCartItem.quantity++; // Increase the quantity if the item already exists in the cart
    } else {
      currentItems.push(item);
    }
  this.cartItems = currentItems;
  this.cartItemsSubject.next(currentItems);
  this.saveCartItems();
}
  
  removeItem(item: CartItem): void {
    const currentItems = this.cartItemsSubject.getValue();
    const index = currentItems.findIndex(cartItem => cartItem.item.name === item.item.name);
  
    if (index !== -1) {
      currentItems.splice(index, 1);
    }
  
    this.cartItemsSubject.next(currentItems);
  }
  updateCartItem(item: CartItem): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.map(cartItem => {
      if (cartItem.item.name === item.item.name) {
        return item;
      } else {
        return cartItem;
      }
    });
    this.cartItemsSubject.next(updatedItems);
  }

  private saveCartItems(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }
  clearCart(): void {
    this.items = []; // Remove all items from the cart
  }
  submitPaymentForm() {
    this.router.navigateByUrl('/payment');
  }
}
