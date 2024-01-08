import { Router } from "express";
import {
  actualizarPelicula,
  crearPelicula,
  eliminarPelicula,
  getPelicula,
  getPeliculas,
} from "../controllers/peliculas.js";
import { validarPelicula } from "../middlewares/validarPelicula.js";

const router = Router();

router.get("/", getPeliculas);

router.get("/:id", getPelicula);

router.post("/", validarPelicula, crearPelicula);

router.put("/:id", validarPelicula, actualizarPelicula);

router.delete("/:id", eliminarPelicula);

export default router;
