import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductEntity } from 'src/app/shared/entities/product.entities';
import { toSignal } from '@angular/core/rxjs-interop'
import { Router } from '@angular/router';
import { MsInputComponent } from 'src/app/components/ms-input/MsInput.component';
import { TextHighLightDirective } from 'src/app/directive/textHighlight.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, JsonPipe, AsyncPipe, MsInputComponent, TextHighLightDirective],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  private readonly productService = inject(ProductService);
  private router = inject(Router);
  isLoading: boolean = true;
  search: string ='';
  // products_ = toSignal(this.productService.get());
  // products$ = this.productService.get();
  
  products!: ProductEntity[];
  productsSearch!: ProductEntity[];
  ngOnInit() {
    this.productService.get().subscribe(res => {
      this.isLoading = true
      this.products = res;
      this.productsSearch = res;
      this.isLoading = false
    })
  }

  handleClickProduct = (id?: number) => {
    this.router.navigate([`/product/${id}`])
  }

  onValueChange(searchValue: string) {
    this.search = searchValue;
    this.productsSearch = this.products.filter(x => x.title?.toLowerCase().includes(this.search.toLowerCase()))
  }
}
