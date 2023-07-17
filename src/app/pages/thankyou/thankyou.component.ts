import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  ratingForm: FormGroup;
  orderedItems: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router ) {
    this.ratingForm = new FormGroup({
      rating: new FormControl(null, Validators.required),
      suggestions: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    const state = window.history.state;
    if (state && state.cartItems) {
      this.orderedItems = state.cartItems;
    }
  }
  rateItem(item: { rating: any; }, rating: any) {
    item.rating = rating;
  }
  
  
  submitRatingForm() {
    
    this.router.navigate(['/home'])
  
  }
  isCardFlipped: boolean = false;

  flipCard() {
    this.isCardFlipped = !this.isCardFlipped;
  }
}
