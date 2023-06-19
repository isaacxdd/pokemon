const pokedex = require("./pokedex")
const mongoose = require(",/connection")
const pokemonData = require("./seedData")

async function seed() {
    //delete
    await Pokemon.deleteMany({})
 const createdPokemons = await Pokemon.create(Pokemons)
 console.log(createdPokemons.length)
 console.log(createdPokemons[0])

}

// run the seed function when the database connect
mongoose.connection.on("open", () => {seed()})