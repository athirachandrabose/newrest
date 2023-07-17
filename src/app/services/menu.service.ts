import { Injectable } from '@angular/core';
import { MenuItem } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = [
    
    {
      name: 'Pizza Pepperoni',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-1.jpg',
      quantity: 1 ,
      category: 'starter',
      rating: 0
    },
    {
      name: 'Meatball',
      description: 'Description of Item 2',
      price: 15,
      image: 'assets/images/food-2.jpg',
      quantity: 1 ,
      category: 'lunch',
      rating: 0
    },
    {
      name: 'Hamburger',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-3.jpg',
      quantity: 1 ,
      category: 'starter',
      rating: 0
    },
    {
      name: 'Fried Potatoes',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-4.jpg',
      quantity: 1 ,
      category: 'dinner',
      rating: 0
    },
    {
      name: 'Chicken Soup',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-5.jpg',
      quantity: 1 ,
      category: 'lunch',
      rating: 0
    },
    {
      name: 'Vegetables Pizza',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-6.jpg',
      quantity: 1 ,
      category: 'dinner',
      rating: 0
    },
    {
      name: 'Spicy Cheese Burger',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-7.jpg',
      quantity: 1 ,
      category: 'starter',
      rating: 0
    },
    {
      name: 'Vegetables Magento Pizza',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-8.jpg',
      quantity: 1 ,
      category: 'lunch',
      rating: 0
    },
    {
      name: 'Mango Bubble Tea',
      description: 'Description of Item 1',
      price: 10,
      image: 'assets/images/food-21.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0
    },
    {
      name: 'Curry Highball',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-22.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0 
    },
    {
      name: 'Loving Cup',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-23.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0 
    },
    {
      name: 'Ayran- Turkish Yogurt Drink',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-24.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0 
    },
    {
      name: 'spiced beetroot buttermilk',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-25.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0 
    },
    {
      name: 'strawberry thandai',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-26.webp',
      quantity: 1 ,
      category: 'drinks',
      rating: 0 
    },
    {
      name: 'Lemon Chicken',
      description: 'Description of Item 3',
      price: 12,
      image: 'assets/images/food-27.jpeg',
      quantity: 1 ,
      category: 'dinner',
      rating: 0 
    }
  // ];
    // Add more menu items dynamically using the addMenuItem method
    
  ];

  constructor() { }

  addMenuItem(item: MenuItem): void {
    this.menuItems.push(item);
  }
  
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
  getMenuCategories(): string[] {
    const categories = new Set<string>();
    this.menuItems.forEach(item => {
      categories.add(item.category);
    });
    return Array.from(categories);
  }
}
