import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const url=process.env.DB_URL;
const sequelize = new Sequelize(url, {dialect: 'postgres', timezone: '+05:30'});

export default sequelize;
