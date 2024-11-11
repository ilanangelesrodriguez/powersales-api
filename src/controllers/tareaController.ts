import { Request, Response } from 'express';
import Tarea from '../models/tarea';

export const crearTarea = async (req: Request, res: Response) => {
  try {
    const tarea = await Tarea.create(req.body);
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerTareas = async (req: Request, res: Response) => {
  try {
    const tareas = await Tarea.findAll();
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerTarea = async (req: Request, res: Response) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      res.status(200).json(tarea);
    } else {
      res.status(404).json({ error: 'Tarea no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarTarea = async (req: Request, res: Response) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (!tarea) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    await tarea.update(req.body);

    res.status(200).json(tarea);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarTarea = async (req: Request, res: Response) => {
  try {
    const deleted = await Tarea.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};