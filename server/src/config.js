//env
import {config as dotenv} from 'dotenv';

dotenv();

export const configDb = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'contacts',
}