import connection from './connection';
import IProduct from '../interfaces/product.interface';

class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await connection.execute(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products ORDER BY id;',
    );
    
    return products as IProduct[];
  };
}

export default ProductModel;
