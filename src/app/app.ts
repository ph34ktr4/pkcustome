import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './menu-bar/menu-bar';
import { MainSlider } from './main-slider/main-slider';
import { ProductsCard } from './products-card/products-card';
import { AboutUs } from "./about-us/about-us";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuBar,
    MainSlider,
    ProductsCard,
    AboutUs,
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
  products : any = 
  [

  {
    "id": 1,
    "Name": "Apple MacBook Air M2",
    "Price": 999,
    "Qty": 30,
    "Category": "Laptop",
    "Description": "Lightweight laptop with Apple M2 chip, 13.6‑inch Liquid Retina display.",
    "ImageURL": "/product_image/Apple MacBook Air M2.jpg",
    "Discount": 10
  },
  {
    "id": 2,
    "Name": "Apple MacBook Pro 14 M3",
    "Price": 1999,
    "Qty": 15,
    "Category": "Laptop",
    "Description": "14‑inch MacBook Pro with M3 chip and mini‑LED display for creators.",
    "ImageURL": "/product_image/Apple MacBook Pro 14 M3.jpg",
    "Discount": 8
  },
  {
    "id": 3,
    "Name": "Dell XPS 13 Plus",
    "Price": 1499,
    "Qty": 20,
    "Category": "Laptop",
    "Description": "13.4‑inch Windows laptop with Snapdragon X Elite, OLED screen.",
    "ImageURL": "/product_image/Dell XPS 13 Plus.jpg",
    "Discount": 12
  },
  {
    "id": 4,
    "Name": "Dell XPS 15",
    "Price": 1699,
    "Qty": 12,
    "Category": "Laptop",
    "Description": "16‑inch premium Windows laptop with Intel Ultra CPU and RTX GPU.",
    "ImageURL": "/product_image/Dell XPS 16.jpg",
    "Discount": 15
  },
  {
    "id": 5,
    "Name": "HP Spectre x360 14",
    "Price": 1299,
    "Qty": 18,
    "Category": "Laptop",
    "Description": "2‑in‑1 convertible with OLED touch display and 12th Gen Intel.",
    "ImageURL": "/product_image/HP Spectre x360 14.jpg",
    "Discount": 10
  },
  {
    "id": 6,
    "Name": "HP Dragonfly Pro",
    "Price": 1599,
    "Qty": 10,
    "Category": "Laptop",
    "Description": "Premium business laptop with 13.5‑inch display and low weight.",
    "ImageURL": "/product_image/HP Dragonfly Pro.jpg",
    "Discount": 14
  },
  {
    "id": 7,
    "Name": "Lenovo ThinkPad X1 Carbon Gen 11",
    "Price": 1799,
    "Qty": 14,
    "Category": "Laptop",
    "Description": "14‑inch business ultrabook with the legendary ThinkPad keyboard.",
    "ImageURL": "/product_image/Lenovo ThinkPad X1 Carbon Gen 11.jpg",
    "Discount": 12
  },
  {
    "id": 8,
    "Name": "Lenovo Yoga 9i 14",
    "Price": 1399,
    "Qty": 16,
    "Category": "Laptop",
    "Description": "Versatile 2‑in‑1 with stylus support and Dolby Vision screen.",
    "ImageURL": "/product_image/Lenovo Yoga 9i 14.jpg",
    "Discount": 10
  },
  {
    "id": 9,
    "Name": "Asus ZenBook Duo 14 OLED",
    "Price": 1499,
    "Qty": 11,
    "Category": "Laptop",
    "Description": "Dual-screen laptop perfect for multitaskers and creators.",
    "ImageURL": "/product_image/Asus ZenBook Duo 14 OLED.jpg",
    "Discount": 15
  },
  {
    "id": 10,
    "Name": "Asus ROG Zephyrus G14",
    "Price": 1599,
    "Qty": 9,
    "Category": "Laptop",
    "Description": "14‑inch gaming laptop with AMD Ryzen and RTX graphics.",
    "ImageURL": "/product_image/Asus ROG Zephyrus G14.jpg",
    "Discount": 20
  },
  {
    "id": 11,
    "Name": "Microsoft Surface Laptop 5",
    "Price": 999,
    "Qty": 25,
    "Category": "Laptop",
    "Description": "13.5‑inch touchscreen laptop with Intel 11th‑Gen and USB‑C.",
    "ImageURL": "/product_image/Microsoft Surface Laptop 5.jpg",
    "Discount": 10
  },
  {
    "id": 12,
    "Name": "Microsoft Surface Pro 9",
    "Price": 1299,
    "Qty": 20,
    "Category": "Laptop",
    "Description": "Tablet‑style laptop with detachable keyboard and slim design.",
    "ImageURL": "/product_image/Microsoft Surface Pro 9.jpg",
    "Discount": 9
  },
  
]
}