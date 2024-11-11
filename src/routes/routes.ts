import { Router } from 'express';
import TareaRouter from './tareaRoute';

const apiRouter = Router();

apiRouter.use('/api/tareas', TareaRouter);

export default apiRouter;