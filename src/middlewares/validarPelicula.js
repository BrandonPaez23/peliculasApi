import { check } from "express-validator";
import { validarData } from "./validarData.js";

export const validarPelicula = [
  check("titulo", "El titulo es obligatorio").not().isEmpty(),
  check("genero", "El genero es obligatorio").not().isEmpty(),
  check("sipnosis", "La sipnosis es obligatorio").not().isEmpty(),
  check("idioma", "El idioma es obligatorio").not().isEmpty(),
  check("clasificacion", "La clasificacion es obligatorio").not().isEmpty(),
  check("director", "El director es obligatorio").not().isEmpty(),
  check("fecha", "La fecha es obligatoria").not().isEmpty(),
  validarData,
];
