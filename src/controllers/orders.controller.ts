import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orders.service';

class OrderController {
  public service = new OrderService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { productsIds } = req.body;
      const userId = req.body.user;

      const newOrder = await this.service.create(userId, productsIds);

      return res.status(StatusCodes.CREATED).json(newOrder);
    } catch (error) {
      next(error);
    }
  };
}

export default OrderController;