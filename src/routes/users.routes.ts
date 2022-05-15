import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateCreateUser from '../middlewares/validate.create.user';

const userController = new UserController();

const route = Router();

route.post('/', validateCreateUser, userController.create);

export default route;