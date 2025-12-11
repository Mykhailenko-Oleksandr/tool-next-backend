import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
} from '../controllers/authController.js';
import {
  loginUserSchema,
  registerSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post('/api/auth/register', celebrate(registerSchema), registerUser);
router.post('/api/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/api/auth/logout', logoutUser);

export default router;
