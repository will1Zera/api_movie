import { body } from "express-validator";

// Realiza as validações dos campos na hora de criar um filme
export const movieCreateValidation = () =>{
    return[
        // Faz a validação do título do filme
        body("title").isString().withMessage("O título do filme é obrigatório.")
            .isLength({ min: 5 }).withMessage("O título do filme é inválido, precisa ter no minimo 5 caracteres."),
        // Faz a validação da nota do filme
        body("rating").isNumeric().withMessage("A nota do filme precisa ser um número válido.")
            .custom((value: number) => {
                if(value < 0 || value > 10){
                    throw new Error("A nota do filme precisa ser entre 0 à 10.");
                }
                return true;
            }),
        body("description").isString().withMessage("A descrição do filme é obrigatória."),
        body("director").isString().withMessage("O nome do diretor é obrigatório."),
        body("poster").isURL().withMessage("A imagem do filme precisa ser uma URL.")
    ];
};