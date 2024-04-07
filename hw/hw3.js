




const getData = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // const res = fetch()
    const ability = response.data.abilities[0].ability.name;
    const pokeImage = response.data.sprites.front_shiny;
    const img = document.getElementById("pokeImage");
    // .then((res) => {console.log(res)})
    // .then()
    img.src = pokeImage;
    img.hidden = false;
    const abilityHeader = document.getElementById("abilityHeader")
    abilityHeader.innerHTML = `Ability: ${ability}`
    return response.data;
}

let formSubmit = (event) => {
    event.preventDefault();
    const pokeName = event.target[0].value
    const pokeData = getData(pokeName)
}

let form = document.getElementById('inputPokeName');
form.addEventListener('submit', formSubmit)