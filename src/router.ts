import { Router, Request, Response } from "express";
// Criando o arquivo para conter as rotas da api
const router = Router();

// Definindo uma rota de teste para api
export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api teste");
});