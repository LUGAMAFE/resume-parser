import { Router } from 'express';
import { postPDF } from '../controllers/documents.js';

const router = Router();

router.post('/uploadPDF', postPDF);

export default router;
