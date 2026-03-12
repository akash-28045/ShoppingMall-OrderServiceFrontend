export interface Order {
  orderId?: number;
  productId: number | null;
  productName: string;
  quantity: number | null;
  totalPrice: number | null;
  orderStatus: string;
}
