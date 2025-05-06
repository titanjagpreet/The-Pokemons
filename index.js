console.log("you're connected");

let pokemonType = "";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("getPokemons").addEventListener("click", async () => {
        
        deletePokemons();

        pokemonType = document.getElementById("categorySelect").value;
        console.log(pokemonType);

        showLoader();

        await getPokemonsByCategory();
        printPokemonData(data);
        await getPokemonImgUrl(pokemons_name, mons_in_a_type);

        renderPokemons();

        hideLoader();
    });

    document.getElementById("delPokemons").addEventListener("click", () => {
        deletePokemons();
    });
    
});

let data;
let pokemons_name = [];

async function getPokemonsByCategory() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`);
        data = await response.json();
        // console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let mons_in_a_type;
function printPokemonData(data) {
    mons_in_a_type = data.pokemon.length;

    // console.log(mons_in_a_type);

    for (let i = 0; i < mons_in_a_type; i++) {
        pokemons_name.push(data.pokemon[i].pokemon.name);
    }

}

let data2;
let img_urls = [];

async function getPokemonImgUrl(pokemons_name, mons_in_a_type) {

    for (let i = 0; i < mons_in_a_type; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons_name[i]}`);
            data2 = await response.json();

            img_urls.push(data2.sprites.front_default);
            // console.log(data2);
            // console.log(img_urls[i]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // console.log(img_urls.length);

}

function renderPokemons() {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";

    for (let i = 0; i < img_urls.length; i++) {
        const card = document.createElement("div");
        card.className = "pokemon-card";

        const img = document.createElement("img");
        img.src = img_urls[i];
        img.alt = pokemons_name[i];
        img.loading = "lazy";

        const name = document.createElement("p");
        name.textContent = pokemons_name[i].charAt(0).toUpperCase() + pokemons_name[i].slice(1);

        card.appendChild(img);
        card.appendChild(name);
        container.appendChild(card);
    }
}

function deletePokemons() {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";

    pokemons_name = [];
    img_urls = [];
    mons_in_a_type = 0;

    console.log("All Pokémon data cleared.");
}

function showLoader() {
    document.getElementById("loader").style.display = "block";
}
function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

