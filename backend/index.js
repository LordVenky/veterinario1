import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./Routes/veterinarioRoutes.js";
import pacieteRoutes from "./Routes/pacienteRoutes.js";

const app = express();
app.use(express.json());
dotenv.config({path:"variables.env"})

conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del Request esta permitido
            callback(null, true)
        } else{
            callback(new Error('No permitido por CORS'))
        }
    }
}

app.use(cors(corsOptions))

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacieteRoutes );

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})
