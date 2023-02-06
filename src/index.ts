//Libraries
import express from "express";
import axios from "axios";

const app = express();
app.use(express.json()); //middleware que transforma la req.body en un json

const PORT = 3000;

app.get("/status", (_req, res) => {
  //Si marca error de que no se está usando una variable, ponemos guión bajo, o guión bajo + nombre y lo ignora
  res.send("Project initialized.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); //Invocamos al método listen de app para levantar el servidor en el puerto indicado
});
