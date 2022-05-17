import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import categories from './data/categories.js';

import productRoute from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoute from './routes/orderRoute.js';

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API is running.....'));
app.get('/categories', (req, res) => res.json(categories));

app.use('/api/products', productRoute);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
