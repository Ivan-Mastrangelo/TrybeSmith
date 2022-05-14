import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateCreateProduct = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, amount } = req.body;
    const { error } = productSchema.validate({ name, amount });
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

export default validateCreateProduct;