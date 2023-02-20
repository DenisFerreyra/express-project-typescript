//Libraries
import express from "express";
import mongoose from "mongoose";

//Para trabajar con docker crearemos un modelo de mongo con la siguientes características
const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();
app.use(express.json()); //middleware que transforma la req.body en un json

//Aquí se le indica el usuario (denis), la contraseña (password), el host (localhost), el puerto (27012)
//luego la base de datos (miapp) y por último el tipo de usuario (admin)
// mongoose.connect(
//   "mongodb://denis:password@localhost:27017/miapp?authSource=admin"
// );
//Aquí cambiamos localhost por testMongo, que es el nombre que tiene la db internamente dentro de mongo,
//Esto lo debemos hacer suponiendo que tenemos una red que conecta nuestros contenedores
mongoose.connect(
  "mongodb://denis:password@testmongo:27017/miapp?authSource=admin"
);

const PORT = 3000;

app.get("/status", (_req, res) => {
  //Si marca error de que no se está usando una variable, ponemos guión bajo, o guión bajo + nombre y lo ignora
  res.send("Project initialized.");
});

//Acá traemos la lista de animales de la base de datos
app.get("/animals", async (_req, res) => {
  console.log("listando animales");
  const animales = await Animal.find();
  return res.send(animales);
});

//Acá si bien usamos un get, es para no usar el postman y poder hacerlo desde el navegador
app.get("/crear-animal", async (_req, res) => {
  console.log("creando animal");
  await Animal.create({ tipo: "Perro", estado: "Nuevo 0km" });
  return res.send("Creación correcta.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); //Invocamos al método listen de app para levantar el servidor en el puerto indicado
});
