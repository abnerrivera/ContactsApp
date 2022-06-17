import express from "express";
//router
import contactsRoutes from "./routes/contacts";
//conecct fron other server
import cors from "cors";
//petitions on console
import morgan from "morgan";

//documentation
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from "./swagerOptions";

const spec = swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(contactsRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(spec));

export default app;