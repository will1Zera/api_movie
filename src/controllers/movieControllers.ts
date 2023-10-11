import { Request, Response } from 'express';
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger';

// Controller para criar um filme
export async function createMovie(req: Request, res: Response){
    return res.status(201).send("Filme criado");
};