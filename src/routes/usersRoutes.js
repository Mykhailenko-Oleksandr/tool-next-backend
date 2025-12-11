import { Router } from 'express';
import { getPublicUserById } from '../controllers/usersController.js';
import { celebrate } from 'celebrate';
import { userIdSchema } from '../validations/usersValidation.js';

const router = Router();

router.get('/api/users/:userId', celebrate(userIdSchema), getPublicUserById);

export default router;
