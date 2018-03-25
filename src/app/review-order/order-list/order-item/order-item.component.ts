import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../shared/order.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
@Input() order: Order;
@Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  OnSelect() {
    this.router.navigate([this.index], { relativeTo: this.route});
  }
}
