import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderListComponent } from './review-order/order-list/order-list.component';
import { OrderService } from './order.service';
import { OrderDetailsComponent } from './review-order/order-details/order-details.component';
import { OrderItemComponent } from './review-order/order-list/order-item/order-item.component';
import { OrderStartComponent } from './review-order/order-start/order-start.component';
import { OrderSearchComponent } from './order-search/order-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateOrderComponent,
    ReviewOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderStartComponent,
    OrderSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
