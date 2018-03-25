import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Order } from './shared/order.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {
orders: Order[]= [];
hasUpdates = false;
retry: any;

constructor(private http: Http) { }



checkForUpdates(): Observable<Boolean> {
  return this.http.head('http://localhost:8080/LindaCareTest/api/hasMoreOrders')
       .map((response: Response) => {
          if (response.headers.has('hasUpdates')) {
            this.hasUpdates = !!response.headers.get('hasUpdates');
          }
          return this.hasUpdates;
        });
}

getAllOrders(): Observable<Order[]> {
  return this.http.get('http://localhost:8080/LindaCareTest/api/getAll')
  .map((res: Response) => this.handleGetAllResponse(res));
}

handleGetAllResponse(res: Response): Order[] {
  const ordersResponse: Order[] = [];
  if (res.json()) {
    const json: any = res.json();
    for (let i = 0; i <= json.length; i++) {
      if (json[i]) {
        ordersResponse.push(new Order(json[i]));
      }
    }
  }
  this.orders = ordersResponse;
  return this.orders;
}

}
