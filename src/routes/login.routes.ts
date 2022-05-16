import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateUserLogin from '../middlewares/validate.user.login';

const loginController = new LoginController();

const route = Router();

route.post('/', validateUserLogin, loginController.login);

export default route;