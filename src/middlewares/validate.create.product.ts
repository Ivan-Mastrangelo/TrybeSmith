// import Joi from 'joi';
// import { Request, Response, NextFunction } from 'express';

// const productSchema = Joi.object({
//   name: Joi.string().min(3).required(),
//   amount: Joi.string().min(3).required(),
// });

// const createProductMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { name, amount } = req.body;
//     const { error } = productSchema.validate({ name, amount });
//     if (error) throw badRequest(error.message);
  
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// export default createProductMiddleware;