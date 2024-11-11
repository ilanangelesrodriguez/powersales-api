import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import iTarea from './interfaces/iTarea';

interface TareaCreacion extends Optional<iTarea, 'id'> {}

class Tarea extends Model<iTarea, TareaCreacion> implements iTarea {
  public id!: number;
  public titulo!: string;
  public descripcion?: string;
  public estado!: string;
  public fecha_vencimiento?: Date;
  public creado_en!: Date;
  public actualizado_en!: Date;
}

Tarea.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'Pendiente',
    },
    fecha_vencimiento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    actualizado_en: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'tareas',
    timestamps: false,
  }
);

export default Tarea;