import { Router } from 'express';
import ProductController from '../controllers/products.controller';
import validateCreateProduct from '../middlewares/validate.create.product';

const productController = new ProductController();

const route = Router();

route.get('/', productController.getAll);
route.post('/', validateCreateProduct, productController.create);

export default route;
