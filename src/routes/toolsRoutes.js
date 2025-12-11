import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { getToolById } from '../controllers/toolsController.js';

const router = Router();

router.get('/api/tools/:toolId', getToolById);

// ПРИВАТНИЙ — Створення нового оголошення інструменту
router.post('/api/tools', authenticate, createTool);

export default router;
