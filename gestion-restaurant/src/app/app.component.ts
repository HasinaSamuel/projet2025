import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  product!: Product;

  ngOnInit(): void {

    this.product = new Product("Pizza", "4 fromages ", 2000, "https://assets.afcdn.com/recipe/20200506/110673_w600.jpg", 10)

  }
}
