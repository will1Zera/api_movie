require("dotenv").config();
import "express-async-errors";
import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddleware";
import { ErrorMiddleware } from "./middleware/error-middleware";

// Configuração inicial do express
const app = express();
app.use(express.json());

// Importando o morgan
app.use(morganMiddleware);

// Importando as rotas e usando um prefixo
app.use("/api/", router);

app.use(ErrorMiddleware.handleError)

// Definindo uma porta pra aplicação
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    Logger.info(`Rodando a aplicação na porta: ${port}`);
});
