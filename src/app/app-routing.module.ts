import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { SignupComponent } from './pages/signup/signup.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'menu' , component: MenuComponent},
  { path: 'cart' , component: CartComponent},
  {path:'payment', component:PaymentComponent},
  {path:'book',component:BooknowComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'',component:FirstpageComponent},
  {path:'firstpage',component:FirstpageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
