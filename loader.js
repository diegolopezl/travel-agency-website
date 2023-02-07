// Tarea de Diego Lopez Latour - 10141760

// Elimina el componente de carga cuando la pantalla ya cargo

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.addEventListener("animationend", () => {
    document.body.removeChild(loader);
  });
});
