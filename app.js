const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = () =>{

    const pokemonPromises = []

    for(let i = 1; i <= 151; i++){//faz rodar e os 150 pokemons
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        // fetch(getPokemonUrl(i)).then(response => response.json())
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {
        //accumulator = parametro que vai gerar a string a cada iteracao, pokemon = que o objeto que ta sendo iterado atualmente
        const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            const sprites = pokemon.sprites.front_default
            
            accumulator += `
            <li class="card ${types[0]}">
            <img class="card-image" alt="${pokemon.name}" src="${sprites}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">${types.join(' | ')}</p>
            </li>
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = lisPokemons
    })


    // fetch(url)
    // .then(response => response.json())
    // .then(pokemon => {
    //     console.log(pokemon)
    // })
}

fetchPokemon();