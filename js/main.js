let cartoonList = document.querySelector(".cartoonList");

function renderPokemon(pokemons) {
  let res = "";

  for (i of pokemons) {
    res += `
        <div class="card shadow-lg p-2 mb-5  rounded rounded-4 ms-5 mt-2 mb-5 me-5" style="width: 15rem;  background-color: orange; ">
        <img src="${i.img}" class="card-img-top" alt="pokemons">
        <div class="card-body">
        <h4 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.id}</h4>
        <h5 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-title">${i.name}</h5>
        <h6 style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-title">${i.spawn_time}</h6>
        <p style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.height} ${i.weight}</p>
        <p style="font-family: 'Martian Mono', monospace; font-weight=300" class="card-text">${i.weaknesses}</p>

        </div>
        </div>
        `;
  }
  cartoonList.innerHTML = res;
}

renderPokemon(pokemons);
