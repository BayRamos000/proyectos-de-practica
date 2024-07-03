const resu = document.getElementById("resultado");
const miEleccion = document.getElementById("yo");
const compu = document.getElementById("compu");
const Empate = document.getElementById("empate");

let misPuntos = 0;
let puntosCompu = 0;
let empate = 0

function comenzar(miSeleccion){
    const compuSelec = eleccompu();
    //console.log(`mi seleccion: ${miSeleccion} seleccion de la compu: ${compuSelec}`)
    const resultados = jugar(miSeleccion, compuSelec);
    resu.textContent = resultados;
}

function eleccompu(){
    const opciones = ["piedra", "papel", "tijera"];
    const elecRandom = Math.floor(Math.random() * opciones.length);
    return opciones[elecRandom];
}

function jugar(miSeleccion, compuSelec){
    //console.log(`mi seleccion: ${miSeleccion} seleccion de la compu: ${compuSelec}`);
    if(miSeleccion === compuSelec) {
        empate ++;
        Empate.textContent = empate;
        return "Es un Empate!"
    } else if (
        (miSeleccion === "piedra" && compuSelec === "tijera")||
        (miSeleccion === "papel" && compuSelec === "piedra")||
        (miSeleccion === "tijera" && compuSelec === "papel")
    ) {
        misPuntos ++;
        miEleccion.textContent = misPuntos;
        return "¡tu ganas! " + miSeleccion + " vence a " + compuSelec;
    } else {
        puntosCompu++;
        compu.textContent = puntosCompu;
        return "perdiste. " + compuSelec  +  " vence a "  +  miSeleccion;
    }
}

//console.log(jugar("piedra","tijera"))
//console.log(jugar("papel","piedra"))
//console.log(jugar("tijera","papel"))
//console.log(jugar("papel","papel"))