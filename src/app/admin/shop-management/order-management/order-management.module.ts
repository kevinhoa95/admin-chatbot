import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderManagementComponent } from './order-management.component';
import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: OrderManagementComponent,
  children: [{
      path: '', component: OrderListComponent,
  }, {
      path: ':id', component: OrderDetailComponent
  }]
}];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListComponent, OrderDetailComponent, OrderManagementComponent]
})
export class OrderManagementModule { }
