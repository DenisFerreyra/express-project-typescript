import express from "express"; //import y export son ecma script modules, si fuese requiere o module.exports serían commonJS
import { getVideogames, getVideoGame } from "../services/videogames";

const router = express.Router();

//Este es un ejemplo de un middleware, aquí iría primero
router.use((_res, _req, next) => {
  console.log("Entró aquí: 1er middleware");
  next();
});

//Este es otro middleware, aquí iría segundo, pasa por los middlwares por el next()
router.use((_res, _req, next) => {
  console.log("Entró aquí: 2do middleware");
  next();
});

router.get("/", async (_req, res) => {
  res.send(await getVideogames());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.send(
    (await getVideoGame(parseInt(id))) || {
      message: "No existe el juego especificado.",
    }
  );
});

export default router;
