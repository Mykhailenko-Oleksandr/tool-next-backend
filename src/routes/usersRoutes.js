import { Router } from 'express';
import { getPublicUserById } from '../controllers/usersController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.get('/api/users/:userId', authenticate, getPublicUserById);

export default router;
