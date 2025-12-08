import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductEntity } from 'src/app/shared/entities/product.entities';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productDetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss']
})
export class ProductDetailComponent {
  activatedRoute = inject(ActivatedRoute);
  userId?: string;
  constructor() {
    console.log(this.activatedRoute);
  }
}
