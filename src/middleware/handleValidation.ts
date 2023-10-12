import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Realiza a validação 
export const validate = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    // Caso não há erros e elementos faltando, ele deixa prosseguir 
    if(errors.isEmpty()) {
        return next();
    }

    // Armazena os erros em um array, para imprimir na tela
    const extratectErrors: object[] = [];
    errors.array().map((err) => extratectErrors.push(err.msg)); // {[err.param]: err.msg}:

    // Retorna o erro e status code
    return res.status(422).json({
        errors: extratectErrors
    });
}