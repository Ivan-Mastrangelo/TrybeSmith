import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await connection.execute(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products ORDER BY id;',
    );
    
    return products as IProduct[];
  };

  public create = async (name: string, amount: string):
  Promise<IProduct> => {
    const [result] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Products 
      (name, amount) VALUES (?, ?);`,
      [name, amount],
    );
    return {
      id: result.insertId,
      name,
      amount,
    };
  };
}

export default ProductModel;
