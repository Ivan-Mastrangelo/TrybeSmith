import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  public service = new ProductService();

  public gatAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  };
}

export default ProductController;