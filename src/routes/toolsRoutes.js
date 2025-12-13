import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';
import { getToolById, createTool } from '../controllers/toolsController.js';
import { createToolValidation } from '../validation/toolsValidation.js';

const router = Router();

router.get('/api/tools/:toolId', getToolById);

// ПРИВАТНИЙ — Створення нового оголошення інструменту
router.post('/api/tools', authenticate, upload.single('image'), createToolValidation, createTool);

export default router;
