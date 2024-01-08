import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes/peliculas.js";
import base from "./db/coneccion.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4800;

(async () => {
  try {
    await base.authenticate();
    await base.sync();
    console.log("Conectado a base de datos");
  } catch (error) {
    console.error("No se conecto a DB", error);
  }
})();

app.use(express.json());
app.use(cors());
app.use("/peliculas", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
