import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();

const route = Router();

route.get('/', productController.gatAll);

export default route;
