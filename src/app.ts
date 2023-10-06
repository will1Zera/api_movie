import express from "express";
import config from "config";

// Configuração inicial do express
const app = express();
app.use(express.json())

// Definindo uma porta pra aplicação
const port = config.get<number>("port");

app.listen(port, async () => {
    console.log(`Rodando a aplicação na porta: ${port}`);
});