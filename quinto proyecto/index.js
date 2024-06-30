const pantallaTiempo = document.getElementById('tiempo');
const botonInicio = document.getElementById('inicio');
const botonPausa = document.getElementById('pausa');
const botonReinicio = document.getElementById('reinicio');

let temporizador;
let estaCorriendo = false;
let tiempoRestante = 25 * 60;

function actualizarPantalla() {
    let minutos = Math.floor(tiempoRestante / 60);
    let segundos = tiempoRestante % 60;
    pantallaTiempo.textContent = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}

function iniciarTemporizador() {
    if (!estaCorriendo) {
        estaCorriendo = true;
        temporizador = setInterval(() => {
            if (tiempoRestante > 0) {
                tiempoRestante--;
                actualizarPantalla();
            } else {
                clearInterval(temporizador);
                estaCorriendo = false;
                alert('¡Tiempo terminado!');
            }
        }, 1000);
    }
}

function pausarTemporizador() {
    if (estaCorriendo) {
        clearInterval(temporizador);
        estaCorriendo = false;
    }
}

function reiniciarTemporizador() {
    clearInterval(temporizador);
    estaCorriendo = false;
    tiempoRestante = 25 * 60;
    actualizarPantalla();
}

botonInicio.addEventListener('click', iniciarTemporizador);
botonPausa.addEventListener('click', pausarTemporizador);
botonReinicio.addEventListener('click', reiniciarTemporizador);

actualizarPantalla();
