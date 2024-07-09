const Boton = document.getElementById("boton");
const cerrar = document.querySelector(".close-icon");
const contenedor = document.querySelector(".contenedor-video");
const trailer = document.querySelector("video");
const primContenedor = document.querySelector(".contenedor1")

Boton.addEventListener("click", () => {
    contenedor.classList.remove("activo");
    primContenedor.classList.add("activo")
});

cerrar.addEventListener("click", () =>{
    contenedor.classList.add("activo");
    primContenedor.classList.remove("activo")
    trailer.pause();
    trailer.currentTime = 0;
});