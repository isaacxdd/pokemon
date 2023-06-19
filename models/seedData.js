const pokemonData = [
    {
      name: "Bulbasaur",
      image: "https://pokeapi.co/api/v2/pokemon/1",
      types: ["Grass", "Poison"],
      stats: {
        hp: 45,
        attack: 49,
        defense: 49
      }
    },
    {
      name: "Charizard",
      image: "https://pokeapi.co/api/v2/pokemon/6",
      types: ["Fire", "Flying"],
      stats: {
        hp: 78,
        attack: 84,
        defense: 78
      }
    },
    // Add more Pokémon objects here...
  ];
  
  // Function to generate an array of 100 Pokémon objects
  function generatePokemonData() {
    const pokemons = [];
    for (let i = 1; i <= 100; i++) {
      const pokemon = {
        name: `Pokemon ${i}`,
        image: `https://pokeapi.co/api/v2/pokemon/${i}`,
        types: ["Type1", "Type2"],
        stats: {
          hp: getRandomStat(),
          attack: getRandomStat(),
          defense: getRandomStat()
        }
      };
      pokemons.push(pokemon);
    }
    return pokemons;
  }
  
  // Helper function to generate a random stat value
  function getRandomStat() {
    return Math.floor(Math.random() * 100);
  }
  
  // Generate an array of 100 Pokémon objects
  const pokemons = generatePokemonData();
  
  console.log(pokemons);

  module.exports = pokemonData