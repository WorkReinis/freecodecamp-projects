let searchButton = document.getElementById("search-button");
let pokemonName = document.getElementById("pokemon-name");
let pokemonId = document.getElementById("pokemon-id");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let pokemonImage = document.getElementById("pokemon-image");
let typesDisplay = document.getElementById("types");
let hp = document.getElementById("hp");
let attack = document.getElementById("attack");
let defense = document.getElementById("defense");
let specialAttack = document.getElementById("special-attack");
let specialDefense = document.getElementById("special-defense");
let speed = document.getElementById("speed");

//Function that feches data for the input Pokemon
function fetchData() {
  
  
  //Regex expression to modify user input
  const searchInput = document.getElementById("search-input")
  .value
  .toLowerCase()
  .replace(/\s*\bform\b/i, "") // Remove the word 'form'
  .replace(/\s*\bstyle\b/i, "") // Remove the word 'style'
  .replace(/\s*\bmode\b/i, "") // Remove the word 'mode'
  .replace(/\s*\bface\b/i, "") // Remove the word 'face'
  .replace(/\s*\bsize\b/i, "") // Remove the word 'size'
  .replace(": ", "-") // Replace ': ' with a hyphen
  .replace(/é/g, "e") // Replace 'é' with 'e'
  .replace("♂", "-male") // Replace '♂' with '-male'
  .replace("♀", "-female") // Replace '♀' with '-female'
  .replace(/\s/g, "-") // Replace all spaces with hyphens
  .replace("'", "") // Remove apostrophes
  .replace(/\.$/, '') // Remove trailing period
  .replace(/\.(?=\S)/g, ''); // Remove periods followed by a non-space character
 

  //Fetch data from api based on pokemon name or index
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput}/`)
      .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
        console.log(data);
        pokemonDataArr(data);
      })  
      .catch(error => {
        console.error('Error:', error);
        alert("Pokémon not found");
      });
  }


//Function that wrangles data to be displayed on app
const pokemonDataArr = (data) => {


  //Decosntruct types array from data 
  const { types } = data;
  

  //Populate basic information and add image
  pokemonName.innerText = `${data.name.toUpperCase()}`;
  pokemonId.innerText = `#${data.id}`;
  weight.innerText = `Weight: ${data.weight}`;
  height.innerText = `Height: ${data.height}`;
  pokemonImage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} image">`;


  //Loop for iterating through types array    
  let typesHTML = "";
  for (let i = 0; i < types.length; i++) {
    const typeName = types[i].type.name.toUpperCase();
    typesHTML += `<span class="class-type" id="${typeName.toLowerCase()}">${typeName}</span>`;
  }
  typesDisplay.innerHTML = `${typesHTML}`;
  

  //Populate table with stats
  hp.innerText = `${data.stats[0].base_stat}`;
  attack.innerText = `${data.stats[1].base_stat}`;
  defense.innerText = `${data.stats[2].base_stat}`;
  specialAttack.innerText = `${data.stats[3].base_stat}`;
  specialDefense.innerText = `${data.stats[4].base_stat}`;
  speed.innerText = `${data.stats[5].base_stat}`;

};


//Event listener for the user input
searchButton.addEventListener("click", fetchData);




/*
fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
    .then((res) => res.json())
    .then((data) => {
        pokemonDataArr = data;
        displayAuthors(pokemonDataArr.slice(startingIndex, endingIndex));  
    })
    .catch((err) => {
    authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
      });
*/
