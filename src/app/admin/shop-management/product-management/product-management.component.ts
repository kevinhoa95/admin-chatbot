import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from '../../../shared/components/product-filter/product-filter.component';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
})
export class ProductManagementComponent {

  @ViewChild(ProductListComponent)
  private productListComponent: ProductListComponent;
  @ViewChild(ProductFormComponent)
  private productFormComponet: ProductFormComponent;
  @ViewChild(ProductFilterComponent)
  private productFilterComponent: ProductFilterComponent;

  private selectedProduct: Product;
  private openForm = false;
  constructor(private productService: ProductService) { }

  private createProduct() {
    console.log('create product');
    console.log(this.productFormComponet.product);
    this.productService.createProduct(this.productFormComponet.product).pipe(
      tap(_ => {
        this.openForm = false;
        this.selectedProduct = null;
        this.productListComponent.reload();
      }),
      catchError((err) => {
        console.log(err);
        return of({});
      })
    ).subscribe(data => { });
  }

  private clearSelectedProduct() {
    this.selectedProduct = null;
    this.productListComponent.selectedProduct = null;
  }

  private editProduct() {
    this.productService.updateProduct(this.selectedProduct).pipe(
      tap(_ => {
        this.openForm = false;
        this.selectedProduct = null;
        this.productListComponent.reload();
      }),
      catchError(err => {
        console.log('error');
        console.log(err);
        return of({});
      })
    ).subscribe(data => { });
  }

  public applyFilters() {
    this.productListComponent.applyFilters(this.productFilterComponent.getFilters());
  }

}
