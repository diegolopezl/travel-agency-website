// Tarea de Diego Lopez Latour - 10141760

// Declaracion de query selectors

const categoryDropdown = document.querySelector(".category-dropdown");
const cityDropdown = document.querySelector(".city-dropdown");
const categories = document.querySelector(".categories");
const cities = document.querySelector(".cities");

const catOpt = document.querySelectorAll(".category-opt");
const cityOpt = document.querySelectorAll(".city-opt");
const catSelected = document.querySelector(".tour-choose");
const citySelected = document.querySelector(".city-choose");

const catArray = Array.from(catOpt);
const cityArray = Array.from(cityOpt);

// Al hacer click enseña el menu de opciones en la barra de busqueda

categoryDropdown.addEventListener("click", () => {
  categories.classList.add("active");
  cities.classList.remove("active");
});

cityDropdown.addEventListener("click", () => {
  cities.classList.add("active");
  categories.classList.remove("active");
});

// Cambia Texto por el seleccionado

catArray.forEach(function (e) {
  e.addEventListener("click", function () {
    catSelected.innerText = this.innerText;
    catSelected.classList.add("tour-selected");
    categories.classList.remove("active");
  });
});

cityArray.forEach(function (e) {
  e.addEventListener("click", function () {
    citySelected.innerText = this.innerText;
    citySelected.classList.add("city-selected");
    cities.classList.remove("active");
  });
});
