// import connection from './connection';
// import IOrder from '../interfaces/product.interface';

// class OrderModel {
//   public getAll = async (): Promise<IOrder[]> => {
//     const [orders] = await connection.execute(
//       `SELECT o.id, o.userId, pr.id AS productsIds
//       FROM Trybesmith.Orders AS o
//       INNER JOIN Trybesmith.Products AS pr
//       ON o.id = pr.orderId
//       ORDER BY o.id;`,
//     );
    
//     return orders as IOrder[];
//   };
// }

// export default OrderModel;
