import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';
@Component({ selector: 'app-product', templateUrl: './product.component.html' })
export class ProductComponent {
  @Input() product: IProduct;
  //Чтобы убрать ошибку product в tsconfig.json
  //"noPropertyAccessFromIndexSignature": false,
  //"strictPropertyInitialization": false,

  details = false;
}
