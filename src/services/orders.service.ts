import OrderModel from '../models/orders.model';
import IOrder from '../interfaces/order.interface';

class OrderService {
  public model = new OrderModel();

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}

export default OrderService;