import mongoose from "mongoose";
import config from "config";

// Configurando a conexão ao banco de dados
async function connect(){
    const dbUri = config.get<string>("dbUri");

    try{
        await mongoose.connect(dbUri);
        console.log("Conexão feita com sucesso.");
    } catch(e){
        console.log(`Error: ${e}`);
    }
}

export default connect;