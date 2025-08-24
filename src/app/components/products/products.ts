import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  productsList = [
    {
      id:1,
      name: "Apple iPhone 14 Pro Max",
      price: 1199.99,
      description: "Apple's flagship smartphone with A16 Bionic chip, 6.7-inch Super Retina XDR display, and advanced camera system.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Apple",
      colour: "Space Black",
      model: "iPhone 14 Pro Max",
      discount: 10,
      type: "Smartphone",
      category: "Electronics",
      isStockAvailable:true
    },
    {
      id:2,
      name: "Nike Air Max 270",
      price: 159.99,
      description: "Comfortable lifestyle sneakers with Max Air cushioning and stylish design.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Nike",
      colour: "Black/White",
      model: "Air Max 270",
      discount: 15,
      type: "Footwear",
      category: "Fashion",
    isStockAvailable:false

    },
    {
      id:3,
      name: "Samsung 55\" QLED 4K Smart TV",
      price: 799.99,
      description: "Stunning 4K resolution with Quantum Dot technology and smart features.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Samsung",
      colour: "Black",
      model: "QN55Q60BAFXZA",
      discount: 20,
      type: "Television",
      category: "Electronics",
            isStockAvailable:true

    },
    {
      id:4,
      name: "Adidas Originals Backpack",
      price: 49.99,
      description: "Classic backpack with modern features and iconic Trefoil logo.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Adidas",
      colour: "Navy Blue",
      model: "Originals Classic",
      discount: 5,
      type: "Bag",
      category: "Accessories",
            isStockAvailable:false

    },
    {
      id:5,
      name: "Dell XPS 13 Laptop",
      price: 1399.00,
      description: "High-performance 13-inch laptop with Intel i7, 16GB RAM, and 512GB SSD.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Dell",
      colour: "Silver",
      model: "XPS 13 9310",
      discount: 12,
      type: "Laptop",
      category: "Computers",
            isStockAvailable:true

    },

    {
      id:6,
      name: "Apple iPhone 14 Pro Max",
      price: 1199.99,
      description: "Flagship smartphone with 6.7-inch display, A16 Bionic chip, and advanced camera.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Apple",
      colour: "Deep Purple",
      model: "iPhone 14 Pro Max",
      discount: 10,
      type: "Smartphone",
      category: "Electronics",
            isStockAvailable:false

    },
    {
      id:7,
      name: "Samsung Galaxy S23 Ultra",
      price: 1299.00,
      description: "Powerful Android smartphone with 200MP camera and S Pen support.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Samsung",
      colour: "Phantom Black",
      model: "Galaxy S23 Ultra",
      discount: 8,
      type: "Smartphone",
      category: "Electronics",
            isStockAvailable:true

    },
    {
      id:8,
      name: "Sony WH-1000XM5 Wireless Headphones",
      price: 399.99,
      description: "Industry-leading noise cancellation headphones with superb audio quality.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Sony",
      colour: "Midnight Blue",
      model: "WH-1000XM5",
      discount: 5,
      type: "Headphones",
      category: "Electronics",
            isStockAvailable:false

    },
    { id:9,
      name: "Nike Air Force 1 '07",
      price: 109.99,
      description: "Classic low-cut sneakers with durable leather and iconic style.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Nike",
      colour: "White",
      model: "Air Force 1 '07",
      discount: 12,
      type: "Shoes",
      category: "Fashion",
            isStockAvailable:true

    },
    {
      id:10,
      name: "HP Pavilion x360 Convertible Laptop",
      price: 699.99,
      description: "2-in-1 touchscreen laptop with Intel Core i5, 8GB RAM, and 256GB SSD.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "HP",
      colour: "Silver",
      model: "Pavilion x360",
      discount: 18,
      type: "Laptop",
      category: "Computers",
            isStockAvailable:false

    },
    {
      id:11,
      name: "Apple Watch Series 9",
      price: 399.00,
      description: "Smartwatch with fitness tracking, GPS, and ECG support.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Apple",
      colour: "Starlight",
      model: "Series 9",
      discount: 10,
      type: "Smartwatch",
      category: "Electronics",
            isStockAvailable:true

    },
    {
      id:12,
      name: "Canon EOS R50 Mirrorless Camera",
      price: 999.00,
      description: "Compact and versatile camera with 24.2MP sensor and 4K video support.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Canon",
      colour: "Black",
      model: "EOS R50",
      discount: 7,
      type: "Camera",
      category: "Photography",
            isStockAvailable:false

    },
    {
      id:13,
      name: "Logitech MX Master 3S Wireless Mouse",
      price: 99.99,
      description: "Advanced ergonomic mouse with ultra-fast scrolling and quiet clicks.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Logitech",
      colour: "Graphite",
      model: "MX Master 3S",
      discount: 15,
      type: "Mouse",
      category: "Accessories",
            isStockAvailable:true

    },
    {
      id:14,
      name: "Adidas Classic Backpack",
      price: 49.99,
      description: "Durable backpack with padded straps and multiple compartments.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Adidas",
      colour: "Black",
      model: "Classic Backpack",
      discount: 20,
      type: "Bag",
      category: "Fashion",
            isStockAvailable:false

    },
    {
      id:15,
      name: "Philips 3000 Series Air Fryer",
      price: 129.00,
      description: "Healthy air fryer with rapid air technology and 4.1L capacity.",
      image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
      brand: "Philips",
      colour: "Black",
      model: "HD9200/91",
      discount: 25,
      type: "Kitchen Appliance",
      category: "Home Appliances",
            isStockAvailable:true

    },
  ];
selectedItems:any=[]
OnItemAdd(product:any){
  this.selectedItems.push(product)
}
 cartItemsTotalPrice(){
  return this.selectedItems.reduce((total:number,item:any)=>{
    return item.price+total
  },0);
 }
 OnRemoveItem(Item:any,i:number){
  this.selectedItems.splice(i,1)
 }
}
