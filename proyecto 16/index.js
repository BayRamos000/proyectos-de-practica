const DocFotos = document.getElementById("fotos");
const Docinput = document.getElementById("input");
const Docboton = document.getElementById("boton");
const DocMensaje = document.getElementById("mensaje");



function obtener() {
    DocFotos.innerHTML = "";
    DocMensaje.classList.add("activo");
    let numero = parseFloat(Docinput.value);
    
    if (numero > 10 || numero < 1) {
        DocMensaje.classList.remove("activo");
        return;
    }
       for (let index = 0; index < numero; index++) {
        const imagenes = document.createElement("img");
        imagenes.src = `https://picsum.photos/250?random=${Math.floor(Math.random() * 2000)}`;
        DocFotos.appendChild(imagenes);
        
    }
}

Docboton.addEventListener("click", ()=>{
    Docboton.classList.add("boton");
    obtener();

    setTimeout(()=> {
        Docboton.classList.remove("boton");
    }, 1000);    
})


