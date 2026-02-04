import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { Product } from '../../core/models/product.interface';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];

  private readonly productsService = inject(ProductsService);
  ngOnInit(): void {
    this.getAllProductsData();
  }

  getAllProductsData(): void {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.productList = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
