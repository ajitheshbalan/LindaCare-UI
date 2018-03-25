import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from '../../shared/order.model';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
orders: Order[] = [];
retry: any;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getDetails();
     this.retry = setInterval(() => {
      this.orderService.checkForUpdates().subscribe((response: Boolean) => {
        if (response) {
          this.getDetails();
        }
      });
    }, 5000);
  }

  getDetails() {
    this.orderService.getAllOrders().subscribe((ordersS: Order[]) => {
      this.orders = ordersS;
    });
  }

  displaydata(data) {
    const datas = data;
  }

}
