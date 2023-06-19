const mongoose = require("./connection")

//destruct Schema and Model from the mongoose object
const {Schema, model} = mongoose

//create a schema, defines that shape of an object 
const pokedexSchema = new Schema({
name: String,

})

//create a model using the schema
const Pokedex = model("pokedex", pokedexSchema)

//export the model
module.exports = Pokedex

