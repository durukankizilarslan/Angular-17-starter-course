import { Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor
    (private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.productsService.getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => { console.log(products.items); });
  }
}
