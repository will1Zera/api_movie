import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

// Criando o arquivo para conter as rotas da api
const router = Router();

// Definindo as rotas da api
export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("Api teste");
    })
    .post("/movie", movieCreateValidation(), validate, createMovie); // Adiciona a validação do middleware nesta rota com o validate