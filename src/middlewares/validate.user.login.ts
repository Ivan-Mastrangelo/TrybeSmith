import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const productSchema = Joi.object({
  username: Joi.required(),
  password: Joi.required(),
});

const validateUserLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const { error } = productSchema.validate({ username, password });
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });

    next();
  } catch (error) {
    next(error);
  }
};

export default validateUserLogin;