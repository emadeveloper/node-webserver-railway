const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Static content
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Emanuel Martinez",
    titulo: "Curso de Node",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Emanuel Martinez",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Emanuel Martinez",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
