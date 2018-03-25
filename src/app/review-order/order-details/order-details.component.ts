import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../order.service';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
order: Order;
  constructor(private route: ActivatedRoute, private orderService: OrderService) {

   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>
  this.order = this.orderService.orders[params['id']]);
  }

}
