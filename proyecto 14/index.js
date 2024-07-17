const DocPuntos = document.getElementById("puntuacion");
const DocPregunta = document.getElementById("pregunta");
const DocInput = document.getElementById("input");
const DocBoton = document.getElementById("boton");

let puntos = 0;
let resultado;

function ecuacion(){
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;
    DocPregunta.innerHTML = `¿Cuanto es ${numero1} multiplicado por ${numero2}?`;
    resultado = numero1 * numero2;
}

DocBoton.addEventListener( "click", () =>{
    let valor =  parseFloat(DocInput.value);

    if (resultado === valor) {
        puntos++;
        DocPuntos.innerHTML = puntos;
    } else{
        puntos--;
        DocPuntos.innerHTML = puntos;
    }
    DocInput.value = " ";
    ecuacion();        
})  

ecuacion();

