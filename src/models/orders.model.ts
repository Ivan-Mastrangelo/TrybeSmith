import { RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/order.interface';

class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.userId, pr.id AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS pr
      ON o.id = pr.orderId;`,
    );
    const reqOrders = orders.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: [order.productsIds],
    })) as IOrder[];
    return reqOrders as IOrder[];
  };
}

export default OrderModel;
