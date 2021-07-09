document.addEventListener('DOMContentLoaded', () =>{
    fetchPokemon()
    // showPokemonCard()
})

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res =>res.json())
    // .then(json => console.log(json)) 
    .then(data => {                         
        for (let i = 0; i < data.results.length; i++) {
            fetch(data.results[i].url)
            .then(response => response.json())
            .then(data => showPokemonCard(data)) 
                // console.log(data))
        }
    })
}

function showPokemonCard(data){
    let pokemonContainer = document.querySelector("#containerPokemon")
    data.forEach((data) => {
        let divContainer = document.createElement('div')
        let divImage = document.createElement('div')
        let h1 = document.createElement('h1')
        divContainer.className = ('pokemon-card')
        divImage.src = ('pokemon') // pokemon.url?
        h1.className = pokemon.name

        pokemonContainer.append(divContainer, divImage, h1)
    })
}

function newPokemonForm(){
    let newForm = document.querySelector("form")
    let formName= document.createElement('input')
    formName.id = "pokemonName"
    formName.placeholder = "Pokemon Name"
    //continue form
}


