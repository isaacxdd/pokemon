require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT;
const methodOverride = require("method-override");
const pokemon = require("./models/connection.js");
const app = express();


// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));


// INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon});
});


// NEW
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs");
});


// DESTROY 
app.delete("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    pokemon.splice(id, 1);
    res.redirect("/pokemon")
});


// UPDATE
app.put("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    let updatedP = pokemon[id];
    updatedP.name = req.body.name;
    pokemon[id] = updatedP;
    res.redirect("/pokemon");
});


// CREATE 
app.post("/pokemon", (req, res) => {
    let createPokemon = {
        name: req.body.name,
        id: req.body.id,
        img: req.body.image || "/pokeball.png"
    };
    pokemon.unshift(createPokemon);
    res.redirect("/pokemon");
});


// EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    const id = req.params.id;
    const pokeProfile = pokemon[id];
    res.render("edit.ejs", {pokeProfile, id});
});


// SHOW
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id;
    const pokeProfile = pokemon[id];
    res.render("show.ejs", {pokeProfile, id});
});


// LISTENER
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
});