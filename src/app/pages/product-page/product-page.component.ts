import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  title = 'angular app';
  products: IProduct[] = [];
  loading = false;
  term = '';
  // products$: Observable<IProduct[]>;
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    //1 вариант
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
  } //при инициализации компонента
}
