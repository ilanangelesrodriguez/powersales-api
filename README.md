# PowerSales

## Descripción

Este proyecto es una API RESTful para gestionar tareas. Utiliza Node.js, Express, Sequelize y PostgreSQL. La API permite crear, obtener, actualizar y eliminar tareas.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```

3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Configura las variables de entorno en el archivo `.env`:
    ```env
    PORT=3000
    ```

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `dev`: Inicia el servidor en modo desarrollo con nodemon.
    ```sh
    npm run dev
    ```

- `build`: Compila el proyecto TypeScript.
    ```sh
    npm run build
    ```

- `start`: Inicia el servidor en modo producción.
    ```sh
    npm run start
    ```

## Uso

1. Inicia el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```

2. La API estará disponible en `http://localhost:3000`.

## Endpoints

### Crear una tarea

- **URL:** `/v1/api/tareas`
- **Método:** `POST`
- **Cuerpo de la solicitud:**
    ```json
    {
      "titulo": "Nueva tarea",
      "descripcion": "Descripción de la tarea",
      "estado": "Pendiente",
      "fecha_vencimiento": "2024-12-31"
    }
    ```

### Obtener todas las tareas

- **URL:** `/v1/api/tareas`
- **Método:** `GET`

### Obtener una tarea por ID

- **URL:** `/v1/api/tareas/:id`
- **Método:** `GET`

### Actualizar una tarea

- **URL:** `/v1/api/tareas/:id`
- **Método:** `PUT`
- **Cuerpo de la solicitud:**
    ```json
    {
      "titulo": "Tarea actualizada",
      "descripcion": "Descripción actualizada",
      "estado": "Completada",
      "fecha_vencimiento": "2024-12-31"
    }
    ```

### Eliminar una tarea

- **URL:** `/v1/api/tareas/:id`
- **Método:** `DELETE`

## Configuración de la Base de Datos

La configuración de la base de datos se encuentra en el archivo [`src/config/database.ts`](src/config/database.ts). Se utiliza Sequelize para la conexión a una base de datos PostgreSQL.

## Modelos

### Tarea

El modelo de tarea se define en [`src/models/tarea.ts`](src/models/tarea.ts) y su interfaz en [`src/models/interfaces/iTarea.ts`](src/models/interfaces/iTarea.ts).

## Controladores

Los controladores para las tareas se encuentran en [`src/controllers/tareaController.ts`](src/controllers/tareaController.ts).

## Rutas

Las rutas de la API se definen en [`src/routes/routes.ts`](src/routes/routes.ts) y [`src/routes/tareaRoute.ts`](src/routes/tareaRoute.ts).

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE.txt](LICENSE.txt) para más detalles.