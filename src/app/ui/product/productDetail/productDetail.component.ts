import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductEntity } from 'src/app/shared/entities/product.entities';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productDetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss'],
})
export class ProductDetailComponent {
  private router = inject(Router);
  private readonly productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  userId: string | null = null;
  product?: ProductEntity;
  constructor() {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.productService.getById(this.userId).subscribe((res) => {
      this.product = res;
    });
  }
  backToList() {
    this.router.navigate(['/product']);
  }
}
