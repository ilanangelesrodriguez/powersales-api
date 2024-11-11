interface iTarea {
  id: number;
  titulo: string;
  descripcion?: string;
  estado: string;
  fecha_vencimiento?: Date;
  creado_en: Date;
  actualizado_en: Date;
}

export default iTarea;