import { NextFunction, Request, Response } from "express";

export class ErrorMiddleware {
    static handleError(
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
