import express from 'express';
import sequelize from './config/database';
import apiRouter from './routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const corsConfig = {
  origin: "*",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization , X-Requested-With",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.options("", cors(corsConfig));
app.use(cors(corsConfig));

const PORT = parseInt(process.env.PORT || '4000');

app.get('/', (req, res) => {
  const name = process.env.NAME || ', este es el servidor de PowerSales';
  console.log('Solicitud recibida', req.url);
  res.send(`Hola ${name}!`);
});

app.use(express.json());
app.use('/v1', apiRouter);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al sincronizar la base de datos:', error);
});

