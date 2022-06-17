import { configDb } from "./config";
//db connection
import mysql from "mysql2/promise";

export const connect = async () => {
  return await mysql.createConnection(configDb);
}