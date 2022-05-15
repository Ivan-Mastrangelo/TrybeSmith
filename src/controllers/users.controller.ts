import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/users.service';

class UserController {
  public service = new UserService();

  public create = async (req: Request, res: Response, next: NextFunction):
  Promise<Response | void> => {
    try {
      const { username, classe, level, password } = req.body;
  
      const token = await this.service.create(username, classe, level, password);
    
      return res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;