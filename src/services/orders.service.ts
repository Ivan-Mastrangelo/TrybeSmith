import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';
import IOrder from '../interfaces/order.interface';

class OrderService {
  public model = new OrderModel();

  public prodModel = new ProductModel();

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    return orders;
  };

  public create = async (userId: number, productsIds: number[]): Promise<IOrder> => {
    const orderId = await this.model.create(userId);
    Promise.all(productsIds.map(async (id: number): Promise<void> => {
      await this.prodModel.upDate(orderId, id);
    }));
    return {
      userId,
      productsIds,
    } as IOrder;
  };
}

export default OrderService;