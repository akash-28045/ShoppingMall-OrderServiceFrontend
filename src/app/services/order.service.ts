import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  orderId?: number;
  productId?: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  orderStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8082/orders';

  constructor(private http: HttpClient) {}

  // GET all orders
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  // CREATE order
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/create`, order);
  }

  // UPDATE order
  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/${id}`, order);
  }

  // DELETE order
  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
