import ProductModel from '../models/products.model';
import IProduct from '../interfaces/product.interface';

class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
  
    return products;
  };

  public create = async (name: string, amount: string):
  Promise<IProduct> => {
    const newProduct = await this.model.create(name, amount);                                 
    return newProduct;
  };
}

export default ProductService;