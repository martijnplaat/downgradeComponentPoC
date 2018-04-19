import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Order } from './order.interface';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Promise<Order[]> {
    return this.http
      .get<Order[]>('/api/orders')
      .toPromise()
      .then(response => response);
  }

  getOrder(id): Promise<Order> {
    return this.http
      .get<Order>(`/api/orders/${id}`)
      .toPromise()
      .then(response => response);
  }

  getOrdersByCustomer(customerId): Promise<Order[]> {
    return this.http
      .get<Order[]>(`/api/customers/${customerId}/orders`)
      .toPromise()
      .then(response => response);
  }

  postOrder(order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }
}
