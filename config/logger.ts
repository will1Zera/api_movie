import winston from "winston";
import config from "config";

// Arquivo de configuração para os logs da api
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () =>{
    const env = config.get<string>("env") || "development";
    const isDevelopment = env === "development"
    return isDevelopment ? "debug" : "warn";
}

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
}

winston.addColors(colors);

// Formatando a mensagem do log
const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level} - ${info.message}`
    )
);

// Criando os arquivos
const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: "logs/errors.log",
        level: "error"
    }),
    new winston.transports.File({ filename: "logs/all.log" })
];

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports
});

export default Logger;