import { Router } from 'express';
import { getToolById } from '../controllers/toolsController.js';
import { celebrate } from 'celebrate';
import { toolIdSchema } from '../validations/toolsValidation.js';

const router = Router();

router.get('/api/tools/:toolId', celebrate(toolIdSchema), getToolById);

export default router;
