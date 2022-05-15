import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/products.service';

class ProductController {
  public service = new ProductService();

  public gatAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { name, amount } = req.body;
  
      const newProduct = await this.service.create(name, amount);
    
      return res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;