import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import tokenVerify from '../middlewares/token.verify';
import validateCreateOrder from '../middlewares/validate.create.order';

const orderController = new OrderController();

const route = Router();

route.get('/', orderController.getAll);
route.post('/', tokenVerify, validateCreateOrder, orderController.create);

export default route;