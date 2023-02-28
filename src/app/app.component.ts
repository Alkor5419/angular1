import { ModalService } from './services/modal.service';
import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { ProductsService } from './services/product.service';
@Component({
  selector: 'app-root', // название компонента для шаблона
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
