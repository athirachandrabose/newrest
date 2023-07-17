import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem, MenuItem } from '../../model';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private router: Router ,
     private cartService: CartService,
     private menuService: MenuService) 
     {
      this.menuItems = this.menuService.getMenuItems();
      this.categories = this.menuService.getMenuCategories();
  
    }
  menuItems: MenuItem[] = [];
  filteredMenuItems: MenuItem[] = [];
  categories: string[] = [];
  searchTerm: string = '';
  

  get combinedMenuItems(): MenuItem[] {
    return this.filteredMenuItems.length > 0 ? this.filteredMenuItems : this.menuItems;
  }

  filterMenuItems(category: string, searchTerm: string): void {
    if (category === 'all') {
      this.filteredMenuItems = this.menuItems;
    } else {
      this.filteredMenuItems = this.menuItems.filter(item => item.category === category);
    }
  
    if (searchTerm) {
      this.filteredMenuItems = this.filteredMenuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  addToCart(item: MenuItem): void {
    const cartItem: CartItem = {
      item: item,
      quantity: 1,
      price: item.price
    };
    this.cartService.addToCart(cartItem);
  
    this.router.navigateByUrl('/cart'); // Redirect to the cart page
  }
  rateItem(item: MenuItem, rating: number): void {
    item.rating = rating;
  }
  
}
export { MenuItem };

