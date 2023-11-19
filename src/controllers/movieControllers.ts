import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";

// Controller para criar um filme
export async function createMovie(req: Request, res: Response) {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
}

// Controller para buscar um filme pelo id
export async function findMovieById(req: Request, res: Response) {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
        return res.status(404);
    }

    return res.status(200).json(movie);
}

// Controller para buscar todos os filmes
export async function getAllMovies(req: Request, res: Response) {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
}

// Controller para deletar filme
export async function removeMovie(req: Request, res: Response) {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
        return res.status(404);
    }

    await movie.deleteOne();
    return res.status(200).json({ msg: "Filme deletado com sucesso." });
}

// Controller para atualizar um filme
export async function updateMovie(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(id);

    if (!movie) {
        return res.status(404);
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(data);
}
