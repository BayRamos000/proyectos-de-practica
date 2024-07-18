const DocImagen = document.querySelector(".contenedor");
const DocBoton = document.getElementById("boton");

let numeroImagenes = 12;

function generarImagen () {
    for (let index = 0; index < numeroImagenes; index++) {
        const nuevaImagen = document.createElement("img");
        nuevaImagen.src = `https://picsum.photos/250?random=${Math.floor(Math.random() * 2000)}`;
        DocImagen.appendChild(nuevaImagen);       
    }
}

DocBoton.addEventListener("click", () =>{
    generarImagen();
})