import express from "express"; //import y export son ecma script modules, si fuese requiere o module.exports serían commonJS
import { getVideogames } from "../services/videogames";

const router = express.Router();

router.get("/", async (_req, res) => {
  const videogames = await getVideogames();
  res.json(videogames);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre } = req.query;
  console.log("Por id");
  res.send(`El id es ${id} y el nombre es: ${nombre}`);
});

export default router;
