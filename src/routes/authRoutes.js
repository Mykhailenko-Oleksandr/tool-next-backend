import { celebrate } from 'celebrate';
import { Router } from 'express';
import { loginUser } from '../controllers/authController.js';
import { loginUserSchema } from '../validations/authValidation.js';

const router = Router();

router.post('/auth/login', celebrate(loginUserSchema), loginUser);

export default router;
