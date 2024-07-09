const Boton1 = document.getElementById("primero");
const boton2 = document.getElementById("segundo");
const boton3 = document.getElementById("tercero");
const caja1 = document.querySelector(".contenedor1");
const caja2 = document.querySelector(".contenedor2");
const caja3 = document.querySelector(".contenedor3");

Boton1.addEventListener("click", () => {
    caja1.classList.remove("activo");
    caja2.classList.add("activo");
    caja3.classList.add("activo");
});

boton2.addEventListener("click", () => {
    caja2.classList.remove("activo");
    caja1.classList.add("activo");
    caja3.classList.add("activo");
});


boton3.addEventListener("click", () => {
    caja3.classList.remove("activo");
    caja1.classList.add("activo");
    caja2.classList.add("activo");
});
