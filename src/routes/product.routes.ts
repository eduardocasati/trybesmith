import { Router } from 'express';
import productController from '../controllers/product.controller';
import { productNameValidation, productPriceValidation } from '../middlewares/productValidation';

const router = Router();

router.post('/', productNameValidation, productPriceValidation, productController.create);
router.get('/', productController.getAll);

export default router;
