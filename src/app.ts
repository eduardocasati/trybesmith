import express from 'express';

// IMPORTAÇÕES
import loginRoutes from './routes/login.routes';
import orderRoutes from './routes/order.routes';
import productRoutes from './routes/product.routes';
// - - -

const app = express();

app.use(express.json());

// ROTAS
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);
// - - -

export default app;
