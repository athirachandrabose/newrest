import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  signupForm!: FormGroup;

  constructor(private router: Router) { }
 
  login() {
    if (!this.username || !this.password) {
      alert('Please fill all the fields.');
      return;
    }
  this.router.navigate(['/home']);
   
  }
    navigateToReset() {
      this.router.navigateByUrl('/reset-password');
    }
}
