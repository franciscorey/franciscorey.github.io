// Función para cargar los datos de la PokeAPI
function loadPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => response.json())
        .then(data => {
            const pokemonContainer = document.getElementById('pokemon-container');

            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(response => response.json())
                    .then(pokemonData => {
                        const pokemonCard = createPokemonCard(pokemonData);
                        pokemonContainer.appendChild(pokemonCard);
                    });
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Función para crear una tarjeta de Pokémon
function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonCard.appendChild(pokemonImage);

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemon.name;
    pokemonCard.appendChild(pokemonName);

    return pokemonCard;
}

// Cargar los datos de la PokeAPI al cargar la página
window.onload = loadPokemon;
