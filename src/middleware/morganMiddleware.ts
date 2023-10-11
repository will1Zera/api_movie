import morgan, { StreamOptions } from "morgan";
import config from "config";
import Logger from "../../config/logger";

// Formata a mensagem do http
const stream: StreamOptions = {
    write: (message) => Logger.http(message),
};

// Desabilita, caso necessário, as mensagens http no log
const skip = () =>{
    const env = config.get<string>("env") || "development";
    return env !== "development";
};

// Estrutura a mensagem http no log
const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {stream, skip}
);

export default morganMiddleware;