import { Router } from 'express';
import TareaRouter from './tareaRoute';

const apiRouter = Router();

apiRouter.use('/api/registros', TareaRouter);

export default apiRouter;