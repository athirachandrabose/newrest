import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  showSuccess: boolean = false;

  // showSuccessMessage() {
  //   this.cartService.clearCart();
  //   this.showSuccess = true;
  // }
  // closeSuccessMessage() {
  //   this.showSuccess = false;
  //   this.router.navigate(['/thankyou']);
  // }
  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  constructor(private router: Router, private route: ActivatedRoute,private cartService: CartService) {}


  submitPaymentForm() {
    
  this.showSuccess = true;
  }
 
    ngOnInit(): void {
      this.route?.paramMap.subscribe((params) => {
        const state = window.history.state;
        if (state && state.cartItems) {
          this.cartItems = state.cartItems;
          this.calculateTotalAmount();
        }
      });
    }
    calculateTotalAmount() {
      this.totalAmount = this.cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
    }
    closeSuccessMessage() {
      const queryParams = {
        cartItems: JSON.stringify(this.cartItems)
      };
      this.router.navigate(['/thankyou'], { state: { cartItems: this.cartItems } });
      this.showSuccess = false;
    }
    
    }

