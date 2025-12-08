import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductEntity } from 'src/app/shared/entities/product.entities';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-productDetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent {
  private readonly productService = inject(ProductService);
  isLoading: boolean = true
  // products_ = toSignal(this.productService.get());
  // products$ = this.productService.get();
  products!: ProductEntity[];
  ngOnInit() {
    this.productService.get().subscribe(res => {
      this.isLoading = true
      this.products = res;
      this.isLoading = false
    })
  }
  
}
