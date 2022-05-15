import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    const { error } = productSchema.validate({ username, classe, level, password });
    console.log(error);
    if (error?.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.message });
    }
    if (error) return res.status(422).json({ message: error.message });

    next();
  } catch (error) {
    next(error);
  }
};

export default validateCreateUser;