import express from 'express';
import productRoutes from './routes/products.routes';
import errorHandler from './middlewares/error.handler';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use(errorHandler);

export default app;
