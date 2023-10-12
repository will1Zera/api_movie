import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger';

// Controller para criar um filme
export async function createMovie(req: Request, res: Response){
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
};

// Controller para buscar um filme pelo id
export async function findMovieById(req: Request, res: Response){
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404);
        }

        return res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
};

// Controller para buscar todos os filmes
export async function getAllMovies(req: Request, res: Response){
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
};