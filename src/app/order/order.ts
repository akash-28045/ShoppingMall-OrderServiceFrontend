import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderService, Order } from '../services/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.html',
  styleUrls: ['./order.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  isDarkMode = true;
  showModal = false;
  editMode = false;

  order: Order = this.getEmptyOrder();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  /* ================= LOAD ORDERS ================= */
  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data || [];
      },
      error: (err) => {
        console.error('Error loading orders:', err);
      }
    });
  }

  /* ================= SUBMIT ORDER ================= */
  submitOrder(form: NgForm): void {

    if (!form.valid) return;

    if (this.editMode && this.order.orderId) {

      this.orderService.updateOrder(this.order.orderId, this.order)
        .subscribe({
          next: (updatedOrder) => {

            this.orders = this.orders.map(o =>
              o.orderId === updatedOrder.orderId ? updatedOrder : o
            );

            this.afterSuccess(form);
          },
          error: (err) => {
            console.error('Error updating order:', err);
          }
        });

    } else {

      this.orderService.createOrder(this.order)
        .subscribe({
          next: (createdOrder) => {

            this.orders = [...this.orders, createdOrder];

            this.afterSuccess(form);
          },
          error: (err) => {
            console.error('Error creating order:', err);
          }
        });
    }
  }

  /* ================= EDIT ORDER ================= */
  editOrder(o: Order): void {
    this.order = { ...o };
    this.editMode = true;
    this.showModal = true;
  }

  /* ================= DELETE ORDER ================= */
  deleteOrder(id: number | undefined): void {

    if (!id) return;

    if (!confirm('Are you sure you want to delete this order?')) return;

    // Remove from UI immediately
    this.orders = this.orders.filter(o => o.orderId !== id);

    // Call backend delete
    this.orderService.deleteOrder(id)
      .subscribe({
        next: () => {
          console.log('Order deleted successfully');

          // Reload orders to stay in sync
          this.loadOrders();
        },
        error: (err) => {
          console.error('Error deleting order:', err);
        }
      });
  }

  /* ================= MODAL ================= */
  openModal(): void {
    this.editMode = false;
    this.resetForm();
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editMode = false;
  }

  /* ================= AFTER SUCCESS ================= */
  private afterSuccess(form: NgForm): void {
    this.closeModal();
    this.resetForm();
    form.resetForm();
  }

  /* ================= RESET ================= */
  private resetForm(): void {
    this.order = this.getEmptyOrder();
  }

  private getEmptyOrder(): Order {
    return {
      orderId: undefined,
      productId: null as any,
      productName: '',
      quantity: null as any,
      totalPrice: null as any,
      orderStatus: ''
    };
  }

  /* ================= THEME ================= */
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  /* ================= TRACK BY ================= */
  trackByOrderId(index: number, item: Order): number | undefined {
    return item.orderId;
  }
}