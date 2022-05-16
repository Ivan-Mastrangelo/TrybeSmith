import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  public service = new LoginService();

  public login = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { username, password } = req.body;
  
      const token = await this.service.login(username, password);

      if (token === 'error') {
        return res.status(StatusCodes.UNAUTHORIZED)
          .json({ message: 'Username or password invalid' });
      }
      return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default LoginController;