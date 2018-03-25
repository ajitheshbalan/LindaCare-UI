import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './review-order/order-details/order-details.component';
import { OrderStartComponent } from './review-order/order-start/order-start.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/reviewOrder'},
    {path: 'reviewOrder', component: ReviewOrderComponent, children : [
        {path: '', component: OrderStartComponent},
        {path: 'new', component: CreateOrderComponent},
        {path: ':id', component: OrderDetailsComponent}
     ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
export class AppRoutingModule {
}
