import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MODULE_NAME } from './app.module.ajs';

import {
  locationServiceProvider,
  productServiceProvider,
  addressServiceProvider
} from './ajs.upgradedproviders';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountDirective } from './customerDetail/discount';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { CustomLabelComponent } from './customLabel/custom-label.component';

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule, FormsModule],
  declarations: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomerDetailComponent,
    CustomLabelComponent,
    DiscountDirective
  ],
  entryComponents: [
    HomeComponent,
    CustomersComponent,
    CustomersTableComponent,
    OrdersComponent,
    CreateOrderComponent,
    CustomLabelComponent,
    CustomerDetailComponent
  ],
  providers: [
    CustomerService,
    OrderService,
    locationServiceProvider,
    productServiceProvider,
    addressServiceProvider
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true
    });
  }
}
