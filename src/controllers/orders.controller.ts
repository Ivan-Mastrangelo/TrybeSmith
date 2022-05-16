import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrderController {
  public service = new OrderService();

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(StatusCodes.OK).json(orders);
  };
}

export default OrderController;