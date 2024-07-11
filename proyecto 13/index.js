const sanwich = document.querySelector(".fa-bars");
const DocContenedor = document.querySelector(".contenedor");
const botonCerrar = document.querySelector(".fa-times");

sanwich.addEventListener("click", () => {
  DocContenedor.classList.toggle("mostrarMenu");
});

botonCerrar.addEventListener("click", () => {
  DocContenedor.classList.remove("mostrarMenu");
});