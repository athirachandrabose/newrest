import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../model';
import { MenuItem } from '../menu/menu.component';
import { Router } from '@angular/router';


// Rest of the code...

/*import { Component } from '@angular/core';


// export interface CartItem {
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface MenuItem {
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   quantity: number;
// }
export interface CartItem {
  item: MenuItem;
  quantity: number;
  price: number;
  name: string; // Add the 'name' property
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = []; // Array to store cart items

  constructor() { }

  ngOnInit(): void {
    // Initialize the cart items if needed
  }

  removeItem(item: CartItem): void {
    // Remove the item from the cart
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
  }
  
}*/
// import { Component } from '@angular/core';
// import { CartItem, MenuItem } from '../cart/cart.component';
// import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = []; // Array to store cart items
  paymentCartItems: CartItem[] = [];
  totalAmount: number = 0;
  constructor(private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalAmount();
    });
  }

  removeItem(item: CartItem): void {
    // Remove the item from the cart
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalAmount();
    }
  }

  calculateTotalAmount() {
    this.totalAmount = this.cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
  }
 
  increaseQuantity(item: CartItem): void {
    item.quantity++;
    item.price = item.item.price * item.quantity;
    this.cartService.updateCartItem(item);
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
      item.price = item.item.price * item.quantity;
      this.cartService.updateCartItem(item);
    }
  }
  goBack(): void {
    this.router.navigate(['/menu']); 
}
pay(): void {
  this.router.navigateByUrl('/payment', { state: { cartItems: this.cartItems } });
}


}
