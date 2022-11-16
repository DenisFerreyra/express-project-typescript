//Libraries
import express from "express";
const app = express();
app.use(express.json());                //middleware que transforma la req.body en un json

const PORT = 3000;

app.get("/status", (_req, res) => {                //Si marca error de que no se está usando una variable, ponemos guión bajo, o guión bajo + nombre y lo ignora
  console.log(`Le pego aquí!`);

  res.send("Project initialized.");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})
