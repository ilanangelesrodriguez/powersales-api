import { Sequelize } from 'sequelize';
import pg from 'pg';

const sequelize = new Sequelize('postgresql://powersales_owner:7yqZHSQjwLU3@ep-wild-smoke-a5ydg6hy.us-east-2.aws.neon.tech/powersales?sslmode=require', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
});

export default sequelize;