// Declaracion de variables y query selectors

const catOpt = document.querySelectorAll(".category-opt");
const cityOpt = document.querySelectorAll(".city-opt");
const catSelected = document.querySelector(".tour-choose");
const citySelected = document.querySelector(".city-choose");
const catArray = Array.from(catOpt);
const cityArray = Array.from(cityOpt);

// Elimina el componente de carga cuando la pantalla ya cargo

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.addEventListener("animationend", () => {
    document.body.removeChild(loader);
  });
});

// Cambia Texto por el seleccionado

catArray.forEach(function (e) {
  e.addEventListener("click", function () {
    catSelected.innerText = this.innerText;
  });
});

cityArray.forEach(function (e) {
  e.addEventListener("click", function () {
    citySelected.innerText = this.innerText;
  });
});
