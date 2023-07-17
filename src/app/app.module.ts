import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
   LoginComponent,
    ContactComponent,
    MenuComponent,
    CartComponent,
    PaymentComponent,
    BooknowComponent,
    ThankyouComponent,
    FirstpageComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
