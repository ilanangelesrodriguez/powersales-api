import { Router } from 'express';
import { crearTarea, obtenerTareas, obtenerTarea, actualizarTarea, eliminarTarea } from '../controllers/tareaController';

const TareaRouter = Router();

TareaRouter.post('/', crearTarea);
TareaRouter.get('/', obtenerTareas);
TareaRouter.get('/:id', obtenerTarea);
TareaRouter.put('/:id', actualizarTarea);
TareaRouter.delete('/:id', eliminarTarea);

export default TareaRouter;