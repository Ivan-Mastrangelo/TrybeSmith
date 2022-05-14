import { Request, Response, NextFunction, Errback } from 'express';
import 'express-async-errors';

const errorHandler = (
  err: Errback,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(err);
  return res.status(500).json({ message: 'Wow! Something is wrong' });
};

export default errorHandler;