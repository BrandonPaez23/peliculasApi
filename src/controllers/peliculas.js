import Pelicula from "../db/Pelicula.js";
import { matchedData } from "express-validator";

export const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.findAll();
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las peliculas" });
  }
};

export const getPelicula = async (req, res) => {
  const id = req.params.id;
  try {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) {
      return res.status(404).json({ message: "No se encontro la pelicula" });
    }

    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la pelicula" });
  }
};

export const crearPelicula = async (req, res) => {
  const peliculaDatos = matchedData(req);

  try {
    const peliculaDb = await Pelicula.findOne({
      where: {
        titulo: peliculaDatos.titulo,
      },
    });

    if (peliculaDb) {
      return res
        .status(400)
        .json({ message: "La pelicula que quieres registrar ya existe" });
    }

    const nuevaPelicula = await Pelicula.create(peliculaDatos);
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la Pelicula" });
  }
};

export const actualizarPelicula = async (req, res) => {
  const id = req.params.id;
  const peliculaDatos = matchedData(req);
  try {
    const peliculaDb = await Pelicula.findByPk(id);
    if (!peliculaDb)
      return res.status(404).json({ message: "No se encontro la pelicula" });

    await peliculaDb.update(peliculaDatos);
    res.status(200).json(peliculaDb);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la pelicula" });
  }
};

export const eliminarPelicula = async (req, res) => {
  const id = req.params.id;
  try {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula)
      return res.status(404).json({ message: "No se encontro la pelicula" });

    await pelicula.destroy();
    res.status(200).json({ message: "Pelicula eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la pelicula" });
  }
};
