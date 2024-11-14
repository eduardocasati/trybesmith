import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginValidation from '../middlewares/loginValidation';

const router = Router();

router.post('/', loginValidation, loginController.authenticateUser);

export default router;
