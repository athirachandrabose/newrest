export interface CartItem {
  item: MenuItem;
  quantity: number;
  price: number;
  // rating:number;
 
}

  export interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number; 
    category: string;
    rating: number;
  }