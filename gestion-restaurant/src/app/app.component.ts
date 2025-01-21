import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
