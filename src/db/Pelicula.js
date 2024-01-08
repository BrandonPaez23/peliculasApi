import { DataTypes, Model } from "sequelize";
import db from "./coneccion.js";

class Pelicula extends Model {}

Pelicula.init(
  {
    titulo: DataTypes.STRING(100),
    fecha: DataTypes.DATEONLY,
    genero: DataTypes.STRING(50),
    sipnosis: DataTypes.STRING(500),
    idioma: DataTypes.STRING(50),
    clasificacion: DataTypes.STRING(50),
    director: DataTypes.STRING(100),
  },
  {
    sequelize: db,
    modelName: "peliculas",
  }
);

export default Pelicula;
