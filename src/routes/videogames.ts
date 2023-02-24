import express from "express"; //import y export son ecma script modules, si fuese requiere o module.exports serían commonJS
import { getVideogames, getVideoGame } from "../services/videogames";

const router = express.Router();

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
