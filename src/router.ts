import { Router, Request, Response } from "express";
import { createMovie, findMovieById } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

// Criando o arquivo para conter as rotas da api
const router = Router();

// Definindo as rotas da api
export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("Api teste");
    })
    
    /* Adiciona a validação do middleware nesta rota com o validate
       Rota para criar um filme */
    .post("/movie", movieCreateValidation(), validate, createMovie) 

    // Rota para buscar um filme pelo id
    .get("/movie/:id", findMovieById); 