import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";
// Criando o arquivo para conter as rotas da api
const router = Router();

// Definindo as rotas da api
export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("Api teste");
    })
    .post("/movie", createMovie);