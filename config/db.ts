import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

// Configurando a conexão ao banco de dados
async function connect(){
    const dbUri = config.get<string>("dbUri");

    try{
        await mongoose.connect(dbUri);
        Logger.info("Conexão ao banco de dados feita com sucesso.");
    } catch(e){
        Logger.error("Conexão ao banco de dados falhou.");
        Logger.error(`Error: ${e}`);
        process.exit(1);
    }
}

export default connect;