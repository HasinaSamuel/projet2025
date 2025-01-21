import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products!: Product[];

  ngOnInit(): void {

    this.products = [
      new Product('Pizza', "pizza 4 fromage", 20000, "https://assets.afcdn.com/recipe/20200506/110673_w600.jpg", 2),
      new Product('Tacos', "american tacos", 15000, "https://static.actu.fr/uploads/2021/04/image4-tacos-de-grenoble.png", 20),
      new Product('Rolls', "specialté du restauant", 10000, "https://files.meilleurduchef.com/mdc/photo/recette/new-york-roll-chocolat/new-york-roll-chocolat-1200.jpg", 2),
    ];
  }

}
