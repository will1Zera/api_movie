import { Router, Request, Response } from "express";
import { createMovie, findMovieById, getAllMovies } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

// Criando o arquivo para conter as rotas da api
const router = Router();

// Definindo as rotas da api
export default router
   
    /* Adiciona a validação do middleware nesta rota com o validate
       Rota para criar um filme */
    .post("/movie", movieCreateValidation(), validate, createMovie) 

    // Rota para buscar um filme pelo id
    .get("/movie/:id", findMovieById)

    // Rota para buscar todos os filmes
    .get("/movie", getAllMovies); 